import React,{useState,useEffect} from 'react';
import { Row, Card,CardBody,CardTitle,CardText,
  CardSubtitle,
   Progress,} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import ThumbnailImage from 'components/cards/ThumbnailImage';
// import Calendar from 'containers/dashboards/CalendarDOStudent';
import Calendar from 'containers/dashboards/Calendar';
import './loca_student.css'

import {
  Linedo,
  RadarChart,Bardo,
} from 'components/charts';


import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();


const LOCA_STUDENT = ({location}) => {
  const loca  = location.pathname 
  const idlist = String(loca).split("/")
  const id = idlist[idlist.length-1]
  let stdno = 1
  console.log('id:',id)
  if(id){
    if(id==='김다산'){
      stdno = 2
    }else if(id ==='김상수'){
      stdno = 1
    }else{
      stdno = 3
    }
  }
  // console.log('id : ',location,'\n',loca)
  const [lectrate,setLectrate] = useState();
  const [scoremod,setScoremod] = useState();
  const [radarData,setRadarData] = useState();
  const [infodata,setInfodata] = useState();
  const [weeklect,setWeeklect] = useState();
  const [monthatten,setMonthatten] = useState();
  useEffect(() => {
    let url = process.env.REACT_APP_DB_HOST
    url +='/do/student'
  fetch(url,{
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    body:JSON.stringify({"id":stdno})
    }).then(function(result){
      return result.json(); 
    }).then(function(json){
      const temp1 = json.list.result;
      console.log('temp1 : ',temp1)
      let temp2 = temp1.STU_INFO;
      let temp3 = JSON.parse(temp2);
      const STU_INFO = temp3.chartdata[0];
      setInfodata(STU_INFO);
     
      temp2 = temp1.WEEK_STUDNUM
    
      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)
      
      temp3 = JSON.parse(temp2)
      
      const WEEK_STUDNUM =temp3.chartdata
      setWeeklect(WEEK_STUDNUM)

      temp2 = temp1.STUDY_RATE
      temp3 = JSON.parse(temp2)
    
      const STUDY_RATE =temp3.chartdata
      setLectrate(STUDY_RATE)
      
      temp2 = temp1.SCORE_CHAN

      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)

      temp3 = JSON.parse(temp2)
      
      const SCORE_CHAN =temp3.chartdata[0]
      setScoremod(SCORE_CHAN)

      temp2 = temp1.FEATURE_DETAIL

      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)
      temp3 = JSON.parse(temp2)    
      const FEATURE_DETAIL =temp3.chartdata[0]
      setRadarData(FEATURE_DETAIL)

      temp2 = temp1.MONTHLY_ATTEN;
      console.log(temp2)
      temp3 = JSON.parse(temp2);
      console.log(temp3)
      const MONTHLY_ATTEN = temp3.chartdata;
      setMonthatten(MONTHLY_ATTEN)

    })

  },[])

  let infostu;
  let weekstudy;
  let scoremodi;
  let radahtml;
  let monthhtml;

  if(!infodata || !weeklect || !scoremod || !radarData ||!monthatten){
    infostu = <Card className="d-flex flex-row mb-4"><ThumbnailImage rounded src="/assets/img/profiles/l-10.jpg"alt="로딩중"className="m-4"/><div className="d-flex flex-grow-1 min-width-zero"><CardBody><div  style={{'float':'left','fontSize':'20px','position': 'absolute','marginTop' : '50px'}}><CardSubtitle>로딩중</CardSubtitle></div><div style={{'float':'right'}}><CardText>로딩중</CardText><CardText>로딩중</CardText><CardText>로딩중</CardText><CardText>로딩중</CardText></div></CardBody></div></Card>
    weekstudy = <div className="chart-container">로딩중</div>        
    scoremodi = <div className="chart-container" style={{"marginTop":"30px"}}>로딩중</div>
    radahtml = <div className="chart-container" style={{"marginTop":"24px","height":"171px"}}>로딩중</div>
    monthhtml = <Colxx xxs="12" xl="6" className="mb-4" >로딩중</Colxx>
  }else{
    const allect = (infodata.전체완강/1)*100
    const monthlect = (infodata.이달완강/1)*100
    infostu =<Card className="d-flex flex-row mb-4"><ThumbnailImage rounded src="/assets/img/profiles/l-1.jpg" alt="Card image cap" className="m-4"/><div className="d-flex flex-grow-1 min-width-zero"><CardBody><div  style={{'float':'left', 'fontSize':'20px','position': 'absolute', 'marginTop' : '50px' }}> <CardSubtitle>{infodata.studentname}</CardSubtitle></div><div style={{'float':'right' }}> <CardText>  전체 수강 강좌 {infodata.수강강좌}개</CardText><CardText>마지막 접속일로부터 {infodata.접속일}일</CardText><CardText>전체 완강 달성률 {allect} %</CardText><CardText>이달 완강 달성률 {monthlect} %</CardText></div></CardBody></div></Card>
    weekstudy = <div className="chart-container"><Linedo data={weeklect} /> </div>
    scoremodi =  <div className="chart-container" style={{"marginTop":"30px"}}><Bardo data={scoremod}/></div>
    radahtml = <div className="chart-container" style={{"marginTop":"24px","height":"171px"}}><RadarChart shadow data={radarData} /></div>
    // const porps = {'dt':monthatten,'len':monthatten.length}
    // monthhtml =  <Colxx xxs="12" xl="6" className="mb-4" ><Calendar {...porps}/></Colxx>
    monthhtml =  <Colxx xxs="12" xl="6" className="mb-4" ><Calendar /></Colxx>
  }
    // console.log(profileStatuses,'\n',profileStatuse)
    return (
    <div>
      <Row>
      <Colxx xxs="12" xl="8" className="mb-4">
          {infostu}
          <Row>
            <Colxx xxs="12" xl="6" className="mb-4">
            <Card>
              <CardBody>
          <CardTitle>
                  강좌별 진도율
                </CardTitle>
              { lectrate && lectrate.map((s) => {
                  return (
                    <div key={s.title} className="mb-2">
                      <p className="mb-2">
                        {s.title}
                        <span className="float-right text-muted">
                          {s.status}/{s.total}
                        </span>
                      </p>
                      <Progress value={(s.status / s.total) * 100} />
                    </div>
                  );
                })}
                </CardBody>
                </Card>
            <Card style={{
                "marginTop":"24px",
                // "height":"100px"
              }}>        
              <CardBody>
                <CardTitle>주요변수별 상세</CardTitle>
              {/* 그림자 레이더 차트 */}
              {radahtml}
              </CardBody>
            </Card>
          </Colxx>   
          {monthhtml}   
          </Row>
        </Colxx>
        <Colxx lg="4" md="12" className="mb-4">
          <Card>            
            <CardBody>
              <CardTitle>
                    주간 강의 수강수
                  </CardTitle>
                  {weekstudy}  
                  
            </CardBody>
          </Card>
          <Card className="dashboard-filled-bar-chart" style={{
                "marginTop":"24px"
              }}> 
            <CardBody>
              <div className="float-left float-none-xs">
                <div className="d-inline-block">
                  <h5 className="d-inline">
                  평균학생 대비 성적 변화
                  </h5>
                  {/* <span className="text-muted text-small d-block">
                    2
                  </span> */}
                </div>
              </div>
              {scoremodi}
              </CardBody>
              {/* {areaChartData}  */}
          </Card>
        </Colxx>
      </Row>           
    
    </div>
  );
};

export default LOCA_STUDENT;
