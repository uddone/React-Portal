package dao;

import dao.mapper.DOMapper;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Repository
public class DODao {
	@Autowired
	private SqlSessionTemplate template;
	private Map<String, Object> param = new HashMap<>();

	public Map<String, Object> getstudentchart(String id) {
		param.clear();
		param.put("ID",id);
		return template.getMapper(DOMapper.class).getstudentchart(param);
	}
	public Map<String, Object> getmainchart() {
		return template.getMapper(DOMapper.class).getmainchart();
	}

	public List<Map<String, Object>> getdownloadchart() {
		return template.getMapper(DOMapper.class).getdownloadchart();
	}


//	public Map<String, Object> getUR() {
//		return template.getMapper(DOMapper.class).getUR();
//	}


}

