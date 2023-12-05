package dao.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface AIMapper {

    @Select("SELECT " +
            " CMPN_CD,BSTOR_CD,USER_NO,USER_ID,EMAIL_ADR,TEL_NO,USER_AUTH,DEL_YN,ERR_CNT,USER_NM " +
            " FROM AD_USER_MSTR " +
            " WHERE USER_NO = #{USERNO}")
    Map<String, Object> getUR(Map<String, Object> param);

    @Select("SELECT EMAIL_ADR " +
            "   ,CMPN_CD " +
            "   ,USER_AUTH" +
            "   ,BSTOR_CD" +
            "   ,USER_NO" +
            "   ,USER_ID" +
            "   ,USER_NM " +
            "   FROM AD_USER_MSTR " +
            "   WHERE USER_ID = ${ID} " +
            "   AND PWD =${PASS}")
    Map<String, Object> getLogin(Map<String, Object> param);

    @Insert("INSERT INTO AD_USER_MSTR (CMPN_CD, BSTOR_CD, USER_ID, PWD, SNS_DIV, EMAIL_ADR, TEL_NO, JOIN_DTM,USER_AUTH, DEL_YN, UPD_DTM, ERR_CNT, USER_NM) VALUES(1, 1, ${ID}, ${PWD},NULL, ${EMAIL_ADR}, ${TEL_NO} , NOW(), 'UR', 'N', NOW(), 0, ${UR_NM})")
    int getRegister(Map<String, Object> param);

    @Select("SELECT MAX(USER_NO) FROM AD_USER_MSTR")
    Integer currentUrcnt();

//    @Select("SELECT * FROM TEMP_MENU LIMIT 1 ")
//    Map<String, Object> getMenu_old();

    @Select({"<script>",
            " SELECT * " +
            " FROM AD_MENU " +
            " WHERE 1=1 " +
            " AND MENU_DEPTH = #{MENU_DEPTH} ",
            " <if test='id != NULL'> AND topid = #{id} </if>",
            " ORDER BY MENU_ORDER ASC",
            " </script>"})
    List<Map<String, Object>> getMenu(Map<String, Object> param);

    @Select("SELECT CMPN_CD,BSTOR_CD,USER_NO,USER_ID,SNS_DIV,EMAIL_ADR,USER_AUTH,DEL_YN,ERR_CNT,USER_NM FROM AD_USER_MSTR WHERE 1=1 AND SNS_DIV = 'NAVER' AND USER_ID = #{USER_ID}")
    Map<String, Object> getNaverLogin(Map<String, Object> param);

    @Insert("INSERT INTO AD_USER_MSTR (PWD,CMPN_CD,BSTOR_CD,USER_ID,SNS_DIV, EMAIL_ADR, JOIN_DTM, USER_AUTH, DEL_YN, UPD_DTM, ERR_CNT, USER_NM) VALUES(${PWD},100,100,${USER_ID},'naver', ${EMAIL_ADR}, NOW(), 'SA', 'N', NOW(), 0, ${USER_NM})")
    int NaverRegist(Map<String, Object> param);
}


