package controller;


import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import logic.DOService;
import logic.LNService;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.collections.map.HashedMap;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.util.*;

@RestController
public class LNController {
	@Autowired
	private LNService service;
	String osname = System.getProperty("os.name").split(" ")[0];
	String opath = (osname.equals("Windows"))?"C:":(osname.equals("Mac")?"/Users/dukim/Desktop":"/home/ec2-user");

	@RequestMapping("/ln/main")
	public ResponseEntity<JSONObject> langmain(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestParam(value="ur", required=false) String ur){
		HttpHeaders responseHeaders = new HttpHeaders();
		Map<String, Object> list = new HashMap<>();

		System.out.println("user : " + ur);
		list = service.getLnDashBoard(ur);
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}


	@RequestMapping("/ln/upload")
	public ResponseEntity<JSONObject> langdragupload(
			HttpServletRequest request
			, HttpServletResponse response
			, HttpSession session
			, @RequestParam(value="file", required=false) MultipartFile[] files
			, @RequestParam(value="ur", required=false) String ur
			, @RequestParam(value="updrec", required=false) String updrec)
			throws JsonProcessingException  {
		HttpHeaders responseHeaders = new HttpHeaders();

		// 프로퍼티 객체생성
		Properties prop = new Properties();
		try {
			//프로퍼티 읽기
			FileInputStream fis = new FileInputStream(opath+"/properties/AIDOS3.properties");
			prop.load(fis);
		}catch (Exception e) {
			e.printStackTrace();
		}
		String notupload = "";
		String AccessKey = prop.getProperty("Access");
		String SecretKey = prop.getProperty("Secret");

		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(ur);
		System.out.println("유저 객체 : " + node.toString()+"\n a : "+updrec+"\n user id : "+node.get("id").toString().replace("\"","")+"\n userno : "+node.get("user_no"));

		//AWS 인증객체 생성
		AWSCredentials credentials = new BasicAWSCredentials(AccessKey, SecretKey);

		String path = opath+"/properties/temp/LN/";

		AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
				.withRegion(Regions.AP_NORTHEAST_2)
				.withCredentials(new AWSStaticCredentialsProvider(credentials))
				.build();

		MultipartFile mpf = files[0];
		int CMPN_CD = 1;
		int BSTOR_CD = 1;
		int USER_NO = 1;
		String msgg;
		String userid = node.get("id").toString().replace("\"","");
		//파일명 가져오기
		String orgfile =mpf.getOriginalFilename();

		Date ti = new Date();
		String  tipath = path + ti.getTime();
		System.out.println("tipa : " + tipath);


		//S3에 업로드할 파일 경로 가져오기
		File filepath = new File(tipath);

		//경로가 존재하지 않으면 디렉토리 만들기
		if(!filepath.exists()) filepath.mkdirs();

		//비어있는 파일객체로 지정된 경로에 생성하기
		File file = new File(filepath+"/"+ mpf.getOriginalFilename());

		//파일로그에서 조건에 맞는 갯수 구하기
		Integer s = service.ivalue(USER_NO);
//		Map<String, String> map = new HashedMap();


		//프로세스 아이디 구하기
		String pid = ManagementFactory.getRuntimeMXBean().getName();

		String s3dlpath = "wav_file";

		String filename = "";
		try {

			//비어있는 객체에 멀티파트 파일로 채워넣기
			mpf.transferTo(file);
			String s3path = s3dlpath+"/";

			try {
				//파일로그에 쌓기
				service.insert_filename(CMPN_CD,BSTOR_CD,USER_NO,orgfile,pid.substring(0,pid.indexOf("@"))+s);

				//시퀀스로 되어있는 파일이름에 확장자명을 넣음
				filename = service.getchgfilename(CMPN_CD,BSTOR_CD,USER_NO,pid.substring(0,pid.indexOf("@"))+s)+".wav";

				System.out.println("s4 :" + s3path);

				//s3에 경로 및 파일 설정하고 파일 업로드
				s3Client.putObject("aido-ln-demo", s3path+filename, file);

				msgg = "success";

//					LN_EXAM_TMP 업로드
				try {

					String cls = service.getusrcls(userid);
					System.out.println("uid : " + cls);
					service.insert_examtemp(userid,filename,cls,"aido-ln-demo","wav_file/",updrec);

					service.insert_sttrslt(userid,filename);
				}catch (Exception tempupd){
					msgg = "error TEMPUPD";
				}
			} catch (Exception e1) {
				msgg = "error e1";
			}
		} catch (Exception e2) {
			msgg = "error e2";
		}
		File[] deletefile = filepath.listFiles();
		if(deletefile != null) {
			for(File a1 : deletefile) {
				a1.delete();
			}
		}
		Map<String,Object> list = new HashMap<>();

		list.put("msg",msgg);
		String dag_id ="dag_ln_upload";
		String task_id = "task_ln_stt_mdl";

		HttpClient client = HttpClientBuilder.create().build();
//		------------------------------------------------------------
		HttpPost httpPost = new HttpPost("http://13.124.35.175:8080/api/v1/dags/"+dag_id+"/dagRuns");

		String userName = "admin";
		String password = "zeqFNwCfc5EtMSNK";
		String credential = userName + ":" + password;
		String encodedValue = Base64.encodeBase64String(credential.getBytes());
		String authorization = "Basic " + new String(encodedValue);

		httpPost.addHeader("Authorization", authorization);
		httpPost.addHeader("Content-Type","application/json");
		httpPost.addHeader("accept", "application/json");

		JSONObject jsonObject1 = new JSONObject();
		jsonObject1.put("EXAM_ID",filename);
		jsonObject1.put("BUK_NM","aido-ln-demo");
		jsonObject1.put("FILE_PATH",s3dlpath+"/");
		JSONObject confjson = new JSONObject();
		confjson.put("conf", jsonObject1);

		String a = confjson.toString().replace("\\","");

		httpPost.setEntity(new StringEntity(a, "UTF-8"));

		//-------------------json객체로 넘겨주는 방식-------------------------------

		HttpResponse afres = null;
		String dag_run_id = "";
		try {
			afres = client.execute(httpPost);

			if (afres.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String bodys = handler.handleResponse(afres);
				ObjectMapper objectMapper1 = new ObjectMapper();
				JsonNode node1 = objectMapper1.readTree(bodys);
				dag_run_id = node1.get("dag_run_id").toString();

				dag_run_id = dag_run_id.substring(1,dag_run_id.length()-1);
				System.out.println("dag_run_id : " + dag_run_id);
				int cnt = 0;
				while (true) {
					Map<String, Object> resultmap = httpgogo(dag_run_id,dag_id,task_id);
					if((int)resultmap.get("state") == 200) {
						try {
							Map<String,Object> getStt = service.getStt(filename);
							if(getStt == null || getStt.get("STT_REG_DT").toString().equals("")){
								continue;
							}else{
								System.out.println("NOTEMPTY : " + getStt.toString());
							}
							list.put("stt",getStt.get("STT_RSLT").toString());
							list.put("exam_id",filename);
							System.out.println("node : " + resultmap.toString() +"\n stt : "+getStt);
						}catch (Exception e_getstt){
							e_getstt.printStackTrace();
						}
						break;
					}else {
						cnt ++;
						System.out.println(cnt);
						if(cnt>20) {
							break;
						}
					}
				}
			} else {
				System.out.println("response is error : " + afres.toString());
			}
		} catch (Exception e6){
			e6.printStackTrace();
		}

//		-----------------------------------------------------------------------

//		------------------------------------------------------------
		System.out.println("LIST : " + list);

		Map<String, Object> getStt = service.getStt(filename);
		list.put("stt",getStt.get("STT_RSLT").toString());
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}



	public Map<String, Object> httpgogo(String dag_run_id, String dag_id, String task_id) {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		Map<String, Object> dataMap = new HashMap<>();
		HttpClient client = HttpClientBuilder.create().disableAutomaticRetries().build();
		String url = "";
		if(task_id.equals("task_ln_dashboard")){
			url = "http://13.124.35.175:8080/api/v1/dags/" + dag_id + "/dagRuns/" + dag_run_id + "/taskInstances/" + task_id+"/xcomEntries/return_value";
		}else {
			url = "http://13.124.35.175:8080/api/v1/dags/" + dag_id + "/dagRuns/" + dag_run_id + "/taskInstances/" + task_id;
		}
//
//			String url = "http://localhost:8080/api/v1/dags/"+dag_id+"/dagRuns/"+dag_run_id+"/taskInstances/"+task_id+"/xcomEntries/return_value";

		HttpResponse response = null;

		try {

			String userName = "admin";
			String password = "zeqFNwCfc5EtMSNK";
			String credentials = userName + ":" + password;
			String encodedValue = Base64.encodeBase64String(credentials.getBytes());
			String authorization = "Basic " + new String(encodedValue);

			HttpGet httpGet = new HttpGet(url);
			RequestConfig requestConfig = RequestConfig.custom()
					.setSocketTimeout(1 * 1000)
					.setConnectTimeout(1 * 1000)
					.setConnectionRequestTimeout(1 * 1000)
					.build();
			httpGet.setConfig(requestConfig);
			httpGet.addHeader("Authorization", authorization);
			httpGet.addHeader("Content-Type","application/json");
			httpGet.addHeader("accept", "application/json");


			response = client.execute(httpGet);

			if (response.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String body = handler.handleResponse(response);
				ObjectMapper objectMapper = new ObjectMapper();
				JsonNode node = objectMapper.readTree(body);

//						System.out.println("response is success : " + response2.getStatusLine().getStatusCode());
				System.out.println("respone : " + node);

//				String valuee = node.get("value").toString();
//
//				valuee = valuee.trim().substring(1, valuee.length()-1).replaceAll("'", "\"");
//
//				if(dag_id.equals("stat_reco_pipeline")) {
//					System.out.println("val : " + valuee);
//
//					node = objectMapper.readTree(valuee);
//
//					String dag_state = node.get("dag_state").toString().replace("\"", "");
//					dataMap.put("dag_state",dag_state);
//				}
//				dataMap.put("node",valuee);
				dataMap.put("state", response.getStatusLine().getStatusCode());
			}else {
				dataMap.put("state",response.getStatusLine().getStatusCode());
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return dataMap;
	}

	@RequestMapping("/ln/edit")
	public ResponseEntity<JSONObject> sttedit(
			HttpServletRequest request
			, HttpServletResponse response
			, HttpSession session
			, @RequestParam(value="examid", required=false) String examid
			, @RequestParam(value="edtxt", required=false) String edtxt)
			throws JsonProcessingException  {
		HttpHeaders responseHeaders = new HttpHeaders();
		Map<String,Object> list = new HashMap<>();

		try {
			service.editstt(edtxt,examid);
			list.put("status","success");
		} catch (Exception edit) {
			edit.printStackTrace();
			list.put("status","fail");
		}

		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping("/ln/eval")
	public ResponseEntity<JSONObject> stteval(
			HttpServletRequest request
			, HttpServletResponse response
			, HttpSession session
			, @RequestParam(value="examid", required=false) String examid)
			throws JsonProcessingException  {
		HttpHeaders responseHeaders = new HttpHeaders();
		Map<String,Object> list = new HashMap<>();

//		평가덱
		String dag_id ="dag_ln_eval";
		String task_id = "task_ln_dashboard";

		HttpClient client = HttpClientBuilder.create().build();
//		------------------------------------------------------------
		HttpPost httpPost = new HttpPost("http://13.124.35.175:8080/api/v1/dags/"+dag_id+"/dagRuns");

		String userName = "admin";
		String password = "zeqFNwCfc5EtMSNK";
		String credential = userName + ":" + password;
		String encodedValue = Base64.encodeBase64String(credential.getBytes());
		String authorization = "Basic " + new String(encodedValue);

		httpPost.addHeader("Authorization", authorization);
		httpPost.addHeader("Content-Type","application/json");
		httpPost.addHeader("accept", "application/json");

		JSONObject jsonObject1 = new JSONObject();
		jsonObject1.put("EXAM_ID",examid);

		JSONObject confjson = new JSONObject();
		confjson.put("conf", jsonObject1);

		String a = confjson.toString().replace("\\","");

		httpPost.setEntity(new StringEntity(a, "UTF-8"));

		//-------------------json객체로 넘겨주는 방식-------------------------------

		HttpResponse afres = null;
		String dag_run_id = "";
		try {
			afres = client.execute(httpPost);

			if (afres.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String bodys = handler.handleResponse(afres);
				ObjectMapper objectMapper1 = new ObjectMapper();
				JsonNode node1 = objectMapper1.readTree(bodys);
				dag_run_id = node1.get("dag_run_id").toString();

				dag_run_id = dag_run_id.substring(1,dag_run_id.length()-1);
				System.out.println("dag_run_id : " + dag_run_id);
				int cnt = 0;
				while (true) {
					Map<String, Object> resultmap = httpgogo(dag_run_id,dag_id,task_id);
					if((int)resultmap.get("state") == 200) {
						Map<String,Object> eval = service.geteval(examid);
						if(eval != null){
							break;
						}else{
							continue;
						}
					}else {
						cnt ++;
						System.out.println(cnt);
						if(cnt>20) {
							break;
						}
					}
				}
			} else {
				System.out.println("response is error : " + afres.toString());
			}
		} catch (Exception e6){
			e6.printStackTrace();
		}

		list.put("status","success");

		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

}

