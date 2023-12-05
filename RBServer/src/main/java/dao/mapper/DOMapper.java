package dao.mapper;

import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface DOMapper {

    @Select("SELECT STU_INFO,WEEK_STUDNUM,STUDY_RATE,MONTHLY_ATTEN,SCORE_CHAN,FEATURE_DETAIL FROM DO_STUDENT WHERE STUD_ID = #{ID} LIMIT 1")
    Map<String, Object> getstudentchart(Map<String, Object> param);

    @Select("SELECT USER_ID,RISK_NUM,DO_PRED,MOTHLY_NUM,PRIM_FEATURE,STU_DOPRED FROM DO_MAIN WHERE USER_ID = 1000")
    Map<String, Object> getmainchart();

    @Select("SELECT USER_ID,RISK_ID,STU_LST,RISK_STATUS FROM DO_DOWMLOAD WHERE USER_ID = 1000")
    List<Map<String, Object>> getdownloadchart();
}
