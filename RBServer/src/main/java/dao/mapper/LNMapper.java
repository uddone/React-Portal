package dao.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.Map;

public interface LNMapper {

    @Select("SELECT MAX(SEQ) FROM LOG_CHG_FILE_NM WHERE USER_NO = #{USER_NO}")
    Integer ivalue(Map<String, Object> param);


    @Insert(" INSERT INTO LOG_CHG_FILE_NM " +
            " (CMPN_CD, BSTOR_CD, USER_NO, PID, ORG_FILE_NM) " +
            " VALUES(#{CMPN_CD}, #{BSTOR_CD}, #{USER_NO}, #{PID}, #{ORG_FILE_NM}) ")
    void insertfilename(Map<String, Object> param);

    @Select(" SELECT MAX(SEQ) " +
            "   FROM LOG_CHG_FILE_NM " +
            "  WHERE 1=1 " +
            "    AND USER_NO = #{USER_NO} " +
            "    AND CMPN_CD = #{CMPN_CD} " +
            "    AND BSTOR_CD = #{BSTOR_CD} " +
            "    AND PID = #{PID} ")
    String getchgfilename(Map<String, Object> param);

    @Select("SELECT CLS_ID  FROM LN_USER_MSTR WHERE USER_ID  = #{USER_ID}")
    String getusrcls(Map<String, Object> param);

    @Insert("INSERT INTO LN_EXAM_MSTR(EXAM_ID, USER_ID, CLS_ID, FILE_NM, BUK_NM, FILE_PATH, INPT_MTHD, REG_DT)" +
            "                        VALUES(#{EXAM_ID}, #{USER_ID}, #{CLS_ID}, #{FILE_NM}, #{BUK_NM}, #{FILE_PATH}, #{INPT_MTHD}, NOW())")
    void insert_examtemp(Map<String, Object> param);

//    @Select("SELECT * FROM LN_STT_RSLT WHERE EXAM_ID = #{FILE}")
    @Select("SELECT STT_RSLT,STT_REG_DT FROM LN_STT_RSLT WHERE 1=1 AND EXAM_ID = #{FILE} AND STT_REG_DT IS NOT NULL limit 1 ")
    Map<String, Object> getStt(Map<String, Object> param);

    @Insert("INSERT INTO AIDO_DEV.LN_STT_RSLT (EXAM_ID, USER_ID, TXT_MDF_YN, REG_DT)VALUES(#{EXAM_ID}, #{USER_ID}, 0, now())")
    void insert_sttrslt(Map<String, Object> param);

    @Update("UPDATE LN_STT_RSLT " +
            " SET USER_MDF_TXT = #{USER_MDF_TXT} " +
            "   ,TXT_MDF_YN =TXT_MDF_YN+1 " +
            "   ,MDF_DT=NOW()" +
            " WHERE EXAM_ID = #{EXAM_ID}") 
    void editstt(Map<String, Object> param);

    @Select("SELECT EXAM_ID, " +
                    " USER_ID, " +
                    " YYMM, " +
                    " WORD_ALL_SC, " +
                    " WORD_DIS_SC, " +
                    " VOCA_SC, " +
                    " NGR_SC, " +
                    " SPCH_SC, " +
                    " SEC_WORD_SC, " +
                    " TOT_SC, " +
                    " PRED_SC " +
            " FROM LN_EVAL_RSLT where 1=1 AND EXAM_ID = #{EXAM_ID} ORDER BY REG_DT DESC")
    Map<String, Object> geteval(Map<String, Object> param);

    @Select("SELECT USER_ID, " +
            "       USER_INFO, " +
            "       SC_RATE, " +
            "       SC_CHANGE, " +
            "       SC_COMP, " +
            "       SPCH_ANALY, " +
            "       POS_ANALY, " +
            "       STRENGTH " +
            "  FROM LN_BI_DASHBOARD" +
            " WHERE USER_ID =#{USER_ID} " +
            " ORDER BY REG_DT DESC " +
            " LIMIT 1")
    Map<String, Object> getLnDashBoard(Map<String, Object> param);
}
