package logic;

import dao.LNDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service	//@Component + service(Controller와 Dao 중간 역할)
public class LNService {
	@Autowired
	private LNDao lnDao;


    public Integer ivalue(int i) {
    	return lnDao.ivalue(i);
    }

	public void insert_filename(int CMPN_CD, int BSTOR_CD, int USER_NO, String ORGFILE, String PID) {
    	lnDao.insertfilename(CMPN_CD,BSTOR_CD,USER_NO,ORGFILE,PID);
	}

	public String getchgfilename(int cmpn_cd, int bstor_cd, int user_no, String pid ) {
    	return lnDao.getchgfilename(cmpn_cd,  bstor_cd, user_no, pid);
	}

	public String getusrcls(String id) {
    	return lnDao.getusrcls(id);
	}

	public void insert_examtemp(String id, String filename, String cls, String BUK_NM, String filepath, String updrec) {
    	lnDao.insert_examtemp(id, filename, cls, BUK_NM, filepath, updrec);
	}

	public Map<String, Object> getStt(String filename) {
    	return lnDao.getStt(filename);
	}

	public void insert_sttrslt(String userid, String filename) {
    	lnDao.insert_sttrslt(userid,filename);
	}

	public void editstt(String edtxt, String examid) {
    	lnDao.editstt(edtxt,examid);
	}

	public Map<String, Object> geteval(String examid) {
    	return lnDao.geteval(examid);
	}

	public Map<String, Object> getLnDashBoard(String ur) {
    	return lnDao.getLnDashBoard(ur);
	}
}