package dao;

import dao.mapper.LNMapper;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;


@Repository
public class LNDao {
	@Autowired
	private SqlSessionTemplate template;
	private Map<String, Object> param = new HashMap<>();

	public Integer ivalue(int i) {
		param.clear();
		param.put("USER_NO",i);
		return template.getMapper(LNMapper.class).ivalue(param);
	}

	public void insertfilename(int cmpn_cd, int bstor_cd, int user_no, String orgfile, String pid) {
		param.clear();
		param.put("CMPN_CD",cmpn_cd);
		param.put("BSTOR_CD",bstor_cd);
		param.put("USER_NO",user_no);
		param.put("ORG_FILE_NM",orgfile);
		param.put("PID",pid);
		template.getMapper(LNMapper.class).insertfilename(param);
	}

	public String getchgfilename(int cmpn_cd, int bstor_cd, int user_no, String pid) {
		param.clear();
		param.put("CMPN_CD",cmpn_cd);
		param.put("BSTOR_CD",bstor_cd);
		param.put("USER_NO",user_no);
		param.put("PID",pid);
		return template.getMapper(LNMapper.class).getchgfilename(param);
	}

	public String getusrcls(String id) {
		param.clear();
		param.put("USER_ID",id);
		return template.getMapper(LNMapper.class).getusrcls(param);
	}

	public void insert_examtemp(String id, String filename, String cls, String buk_nm, String filepath, String updrec) {
		param.clear();
		param.put("EXAM_ID",filename);
		param.put("USER_ID",id);
		param.put("CLS_ID",cls);
		param.put("FILE_NM",filename);
		param.put("FILE_PATH",filepath);
		param.put("BUK_NM",buk_nm);
		param.put("INPT_MTHD",updrec);
		template.getMapper(LNMapper.class).insert_examtemp(param);
	}

	public Map<String, Object> getStt(String filename) {
		param.clear();
		param.put("FILE",filename);
		return template.getMapper(LNMapper.class).getStt(param);
	}

	public void insert_sttrslt(String userid, String filename) {
		param.clear();
		param.put("USER_ID",userid);
		param.put("EXAM_ID",filename);
		template.getMapper(LNMapper.class).insert_sttrslt(param);
	}

	public void editstt(String edtxt, String examid) {
		param.clear();
		param.put("USER_MDF_TXT",edtxt);
		param.put("EXAM_ID",examid);
		template.getMapper(LNMapper.class).editstt(param);
	}

	public Map<String, Object> geteval(String examid) {
		param.clear();
		param.put("EXAM_ID",examid);
		return template.getMapper(LNMapper.class).geteval(param);
	}

	public Map<String, Object> getLnDashBoard(String ur) {
		param.clear();
		param.put("USER_ID",ur);
		return template.getMapper(LNMapper.class).getLnDashBoard(param);
	}


//	public Map<String, Object> getUR() {
//		return template.getMapper(DOMapper.class).getUR();
//	}


}

