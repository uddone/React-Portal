package controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import logic.AIService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class MainController {
	@Autowired
	private AIService service;

	@RequestMapping("/api/test")
	public String apitest() {
//		-------------------------------------------------------
		System.out.println("호출");
		List<Map<String,Object>> list = new ArrayList<>();
		Map<String,Object> hm = new HashMap<>();
		hm.put("name","dukim");
		hm.put("age","29");
		list.add(hm);
		hm = new HashMap<>();
		hm.put("name","dukim2");
		hm.put("age","28");
		list.add(hm);
		// Map<String,Object> map = service.getUR(1);
		// list.add(map);
//		System.out.println(list.toString());
//		-------------------------------------------------------


//		List<String> list = new ArrayList<>();
//		list.add("dukim");
//		list.add("dukim");
//		Map<String,Object> hm = new HashMap<>();
//		hm.
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		return jsonObject.toString();
	}

	@RequestMapping("/api/urtest")
	public String urtest(HttpServletRequest request, HttpSession session,@RequestBody String body ) throws JsonProcessingException {
		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);
		System.out.println("respone : " + node+"\nid :"+ node.get("id").toString());

		Map<String,Object> list = service.getUR(1);
		System.out.println("LIST : " + list.toString());
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		return jsonObject.toString();
	}

	@RequestMapping(value = "/api/login")
	public ResponseEntity<JSONObject> login(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

//		System.out.println("respone : " + node);
		System.out.println("id :"+ node.get("id").toString());

		String id = node.get("id").toString();
		String pass = node.get("pass").toString();
		responseHeaders.add("Content-Type","application/json; charset=utf-8");

		Map<String,Object> list = new HashMap<>();
		try {
				list = service.getLogin(id,pass);
		}catch (Exception e){
			e.printStackTrace();
		}
		System.out.println("listL : " + list);
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/api/naverlogin")
	public ResponseEntity<JSONObject> naverlogin(
			HttpServletRequest request, HttpServletResponse response,
			HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

//		System.out.println("jsson :"+ node.get("jsson").toString());

		String pwd = node.get("pwd").toString();
		String jsson = node.get("jsson").toString();

		JsonNode usernode = objectMapper.readTree(jsson);
		String id = usernode.get("id").toString().replace("\"","");
		System.out.println("ID : " + id);
//		System.out.println("jsson :"+ usernode.toString());

		responseHeaders.add("Content-Type","application/json; charset=utf-8");

		Map<String,Object> list = new HashMap<>();
		try {
			list = service.getNaverLogin(id);
			if(list == null){
				list = service.NaverRegist(usernode,pwd);
			}
		}catch (Exception e){
			e.printStackTrace();
		}
		System.out.println("listL : " + list);
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/api/getuser")
	public ResponseEntity<JSONObject> getuser(HttpServletRequest request, HttpServletResponse response, HttpSession session,
											  @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

//		System.out.println("respone : " + node);
		System.out.println("id :"+ node.get("id").toString());

		Integer userno = Integer.parseInt(node.get("id").toString());
		responseHeaders.add("Content-Type","application/json; charset=utf-8");

		Map<String,Object> list = new HashMap<>();
		try {
			list = service.getUR(userno);
		}catch (Exception e){
			e.printStackTrace();
		}
		System.out.println("listL : " + list);
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}


	@RequestMapping(value = "/api/menuitem")
	public ResponseEntity<JSONObject> menuitem(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

//		System.out.println("respone : " + node);
		System.out.println("UserAuth :"+ node.get("UserAuth").toString());

		responseHeaders.add("Content-Type","application/json; charset=utf-8");

//		Map<String,Object> ol = new HashMap<>();
		List<Map<String,Object>> list = new ArrayList<>();

		JSONArray mainArray = new JSONArray();
		JSONObject mainmenu = new JSONObject();
		JSONArray subArray = new JSONArray();
		JSONObject submenu = new JSONObject();
		try {
//			ol = service.getMenu_old();
			list = service.getMenu(0);
			for(Map<String,Object> obj : list){
				mainmenu = new JSONObject();
				mainmenu.put("id", obj.get("id").toString());
				mainmenu.put("icon", obj.get("icon").toString());
				mainmenu.put("label", obj.get("label").toString());
				mainmenu.put("to", obj.get("togo").toString());
				List<Map<String,Object>> sublist = new ArrayList<>();
				sublist = service.getSubMenu(1,obj.get("id").toString());
				if(sublist.size() !=0){
					subArray = new JSONArray();
					for(Map<String,Object> subobj : sublist) {
						submenu = new JSONObject();
						submenu.put("icon", subobj.get("icon").toString());
						submenu.put("label", subobj.get("label").toString());
						submenu.put("to", subobj.get("togo").toString());
						subArray.add(submenu);
						List<Map<String,Object>> sublist2 = new ArrayList<>();
						JSONArray subArray2 = new JSONArray();
						sublist2 = service.getSubMenu(2,subobj.get("id").toString());
						if(sublist2.size() !=0){
							JSONObject submenu2 = new JSONObject();
							subArray2 = new JSONArray();
							for(Map<String,Object> subobj2 : sublist2) {
								submenu2 = new JSONObject();
								submenu2.put("icon", subobj2.get("icon").toString());
								submenu2.put("label", subobj2.get("label").toString());
								submenu2.put("to", subobj2.get("togo").toString());
								subArray2.add(submenu2);
							}
							submenu.put("subs",subArray2);
						}
					}
					mainmenu.put("subs",subArray);
				}
				mainArray.add(mainmenu);
			}

		}catch (Exception e){
			e.printStackTrace();
		}
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
//		inner.put("result",ol);
		inner.put("result2",mainArray);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}


	@RequestMapping(value = "/api/register")
	public ResponseEntity<JSONObject> register(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		System.out.println("data : " + body);
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

//		System.out.println("respone : " + node);
//		System.out.println("id :"+ node.get("id").toString());
		Map<String,Object> map = new HashMap<>();

		String id = node.get("id").toString().replace("\"","\'");
		map.put("ID",id);

		String pwd = node.get("pass").toString().replace("\"","\'");;
		map.put("PWD",pwd);

		String ur_nm = node.get("name").toString().replace("\"","\'");;
		map.put("UR_NM",ur_nm);

		String tel_no = node.get("tele").toString().replace("\"","\'");;
		map.put("TEL_NO",tel_no);

		String email_adr = node.get("email").toString().replace("\"","\'");;
		map.put("EMAIL_ADR",email_adr);


		responseHeaders.add("Content-Type","application/json; charset=utf-8");
		Integer success = 0;
		Map<String,Object> list = new HashMap<>();
		try {
			System.out.println("map : " + map);
			success = service.getRegister(map);
			System.out.println("insert : " + success);
			list.put("status","ok");

		}catch (Exception e){
			e.printStackTrace();
			list.put("status","nope");
		}
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result",list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

}

