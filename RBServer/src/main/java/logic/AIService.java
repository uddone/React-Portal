package logic;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.AIDao;


@Service	//@Component + service(Controller와 Dao 중간 역할)
public class AIService {
	@Autowired
	private AIDao aiDao;

	private Logger logger = LoggerFactory.getLogger(AIService.class);

	public Map<String, Object> getUR(Integer userno) {
		return aiDao.getUR(userno);
	}

	public Map<String, Object> getLogin(String id, String pass) {
		return aiDao.getLogin(id,pass);
	}

	public Integer getRegister(Map<String, Object> map) {
		return aiDao.getRegister(map);
	}

//	public Map<String, Object> getMenu_old() {
//		return aiDao.getMenu_old();
//	}

	public List<Map<String, Object>> getMenu(int menudepth) {
		return aiDao.getMenu(menudepth);
	}

	public List<Map<String, Object>> getSubMenu(int menudepth, String id) {
		return aiDao.getSubMenu(menudepth,id);
	}

	public Map<String, Object> getNaverLogin(String id) {
		return aiDao.getNaverLogin(id);
	}

	public Map<String, Object> NaverRegist(JsonNode usernode, String pwd) {
		return aiDao.NaverRegist(usernode,pwd);
	}
}