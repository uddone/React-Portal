import React, { useEffect
  , useState 
} from 'react';
import { Row, Card,CardBody,CardTitle,Progress,} from 'reactstrap';
import { Colxx
} from 'components/common/CustomBootstrap';
import IconCardsCarousel from 'containers/dashboards/IconCardsCarouselDOMain';

import {
  DoughnutChart,
  LineChart,
  BarChart,
} from 'components/charts';

// import {
//   lineChartData,
//   doughnutDataDOMain,
//   barDataDOMain
// } from 'data/charts';

import { ThemeColors } from 'helpers/ThemeColors';


// import profileStatuses2 from 'data/do_main_profile';
import Sankeychart from './sankey';

const colors = ThemeColors();


const DO_MAIN = () => {
  const [lineChartData2,setLineChartData2] = useState();
  const [doughnutDataDOMain2,setDoughnutDataDOMain2] = useState();
  const [barDataDOMain2,setBarDataDOMain2] = useState();
  const [profileStatuses,setProfileStatuses] = useState();
  const [carddata,setCarddata] = useState();
  
  useEffect(() => {
    let url = process.env.REACT_APP_DB_HOST
    url +='/do/main'
  fetch(url,{
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    body:JSON.stringify({})
    }).then(function(result){
      return result.json(); 
    }).then(function(rslt){
      const temp1 = rslt.list.result
      console.log(temp1)
      // const MOTHLY_NUM = JSON.parse(temp1.MOTHLY_NUM);
      
      let temp2 = temp1.MOTHLY_NUM;
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
      let temp3 = JSON.parse(temp2);
      const MOTHLY_NUM = temp3.chartdata[0];
      setBarDataDOMain2(MOTHLY_NUM);
      
      temp2 = temp1.DO_PRED;
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
      const DO_PRED = temp3.chartdata[0];
      
      setLineChartData2(DO_PRED);

      temp2 = temp1.STU_DOPRED;
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

      temp3 = JSON.parse(temp2); 
      const STU_DOPRED = temp3.chartdata[0];
      setDoughnutDataDOMain2(STU_DOPRED);
      
      temp2 = temp1.PRIM_FEATURE;
      temp3 = JSON.parse(temp2);
      const PRIM_FEATURE = temp3.chartdata;
      setProfileStatuses(PRIM_FEATURE)
      // console.log(PRIM_FEATURE,',',profileStatuses2)
      
      temp2 = temp1.RISK_NUM;
      temp3 = JSON.parse(temp2);
      const RISK_NUM = temp3.chartdata;
      setCarddata(RISK_NUM)
      console.log(RISK_NUM)

    })
  },[])
  let doughnudatachart;
  let line;
  let bar;
  let carrd;
  // let profile;

  if(!doughnutDataDOMain2 || !lineChartData2 || !barDataDOMain2 || !carddata){
          doughnudatachart = <div className="chart-container"><h3>로딩중</h3></div>
          line =<div className="chart-container"><h3>로딩중</h3></div>
          bar =<div className="chart-container" style={{"marginTop":"30px"}}><h3>로딩중</h3></div>
          carrd=<div><p>로딩중</p></div>
  }else{
    const porps = {'dt':carddata,'len':carddata.length}
    doughnudatachart =<div className="chart-container"><DoughnutChart data={doughnutDataDOMain2} /></div>
    line =<div className="chart-container"><LineChart data={lineChartData2} /></div>
    bar=<div className="chart-container" style={{"marginTop":"30px"}}><BarChart data={barDataDOMain2}/></div>
    carrd = <IconCardsCarousel {...porps} />
  }
  return (
    <div>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.analytics" match={match} /> */}
          {/* <Separator className="mb-5" /> */}
        </Colxx>
      </Row>
      <Row>
          <Colxx sm="12" md="6" className="mb-4">
            <Card style={{
                  'height':'100%'
                }}>
              <CardBody>
                <CardTitle>위험군별 학생수</CardTitle>
                {carrd}
              </CardBody>
            </Card>
            </Colxx>
            <Colxx sm="12" md="6" className="mb-4">
              <Card>
                <CardBody> 
                  <CardTitle>
                    이탈예측률 추이
                  </CardTitle>
                        {line}        
                </CardBody>
              </Card>
                
            </Colxx>
      </Row>
      <Row>
      <Colxx sm="12" md="6" className="mb-4">
          <Card className="dashboard-filled-bar-chart">
            <CardBody>
              <div className="float-left float-none-xs">
                <div className="d-inline-block">
                  <h5 className="d-inline">
                  월별 이탈,유지,이탈예측 수
                  </h5>
                  {/* <span className="text-muted text-small d-block">
                    2
                  </span> */}
                </div>
              </div>
            
            {bar}
              </CardBody>
              
              {/* {areaChartData}  */}
          </Card>
        </Colxx>
        <Colxx xl="3" lg="6" className="mb-4">
          <Card className="dashboard-filled-bar-chart">
            <CardBody>
            <CardTitle>
                점수별 주요변수 랭킹
              </CardTitle>
            {profileStatuses && profileStatuses.map((s) => {
                return (
                  <div key={s.title} className="mb-4">
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
              {/* conversionChartData */}
          </Card>
        </Colxx>
        <Colxx xl="3" lg="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>
                학년별 이탈예측률
              </CardTitle>
              {doughnudatachart}
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12" className="mb-4">
        <Card className="h-100" id='sanketcard'>
          <CardBody>
          <CardTitle>
                Sankey Chart
              </CardTitle>
              {/* <img src="/assets/img/test3/sankey-new.jpg" alt="sankey" style={{
                "width":"100%",
                "height":"80%"
              }}/> */}
              <Sankeychart
                // style={{
                //   "width":"100%",
                //   "height":"80%"
                // }}
              />
          </CardBody>
          </Card>
        </Colxx>
      </Row>
      </div>
  );
};

export default DO_MAIN;