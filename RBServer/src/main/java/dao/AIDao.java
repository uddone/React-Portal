package dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.mapper.AIMapper;


@Repository
public class AIDao {
	@Autowired
	private SqlSessionTemplate template;
	private Map<String, Object> param = new HashMap<>();

	public Map<String, Object> getUR(Integer userno) {
		param.clear();
		param.put("USERNO",userno);
		System.out.println("userno : "+userno);
		return template.getMapper(AIMapper.class).getUR(param);
	}

	public Map<String, Object> getLogin(String id,String pass) {
		param.clear();
		param.put("ID",id);
		param.put("PASS",pass);
		System.out.println("param : " + param.toString());
		return template.getMapper(AIMapper.class).getLogin(param);
	}

	public int getRegister(Map<String, Object> map) {
		param.clear();
		param = map;
//		Integer ur_no =currentUrcnt();
//		if(ur_no == null){
//			ur_no = 0;
//		}
//		ur_no += 1;
//		param.put("UR_NO",ur_no);
		return template.getMapper(AIMapper.class).getRegister(param);
	}
	public Integer currentUrcnt(){
		return template.getMapper(AIMapper.class).currentUrcnt();
	}

//	public Map<String, Object> getMenu_old() {
//		return template.getMapper(AIMapper.class).getMenu_old();
//	}

	public List<Map<String, Object>> getMenu(int menudepth) {
		param.clear();
		param.put("MENU_DEPTH",menudepth);
		return template.getMapper(AIMapper.class).getMenu(param);
	}

	public List<Map<String, Object>> getSubMenu(int menudepth, String id) {
		param.clear();
		param.put("MENU_DEPTH",menudepth);
		param.put("id",id);
		return template.getMapper(AIMapper.class).getMenu(param);
	}

	public Map<String, Object> getNaverLogin(String id) {
		param.clear();
		param.put("USER_ID",id);
		return template.getMapper(AIMapper.class).getNaverLogin(param);
	}

	public Map<String, Object> NaverRegist(JsonNode usernode, String pwd) {
		param.clear();
		param.put("USER_ID",usernode.get("id").toString().replace("\"","'"));
		param.put("USER_NM",usernode.get("name").toString().replace("\"","'"));
		param.put("EMAIL_ADR",usernode.get("email").toString().replace("\"","'"));
		param.put("PWD",pwd.replace("\"","'"));
		int succ = template.getMapper(AIMapper.class).NaverRegist(param);
		if (succ > 0){
			return template.getMapper(AIMapper.class).getNaverLogin(param);
		}else{
			return null;
		}
	}
}

