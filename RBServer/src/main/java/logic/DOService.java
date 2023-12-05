package logic;

import dao.DODao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service	//@Component + service(Controller와 Dao 중간 역할)
public class DOService {
	@Autowired
	private DODao doDao;

	public Map<String, Object> getstudentchart(String id) {
		return doDao.getstudentchart(id);
	}

	public Map<String, Object> getmainchart() {
		return doDao.getmainchart();
	}

	public List<Map<String, Object>> getdownloadchart() {
		return doDao.getdownloadchart();
	}

}