import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Progress, Row} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import './do_student360.css'
import profileStatuses from 'data/profileStatuses360';
// import ThumbnailImage from 'components/cards/Thumbnails360';
import { Line360, Radar360 } from 'components/charts';
import { radarChartData360,lineChartData360 } from 'data/charts';

const DO_STUDENT360 = () => {
  
    return (
    <div>
      <Row>
        <Colxx md="8">
          <Card className="d-flex flex-row mb-4">
            <img src="/assets/img/profiles/l-1.jpg" alt="Card cap" className="m-4" 
            // width="100vw" 
            height="130vh" />
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <CardSubtitle style={{"fontSize":"xx-large"}}>차주영</CardSubtitle>
                <table style={{"width":"100%"}}>
                  <tr>
                    <th>학교명</th><td>한국 고등학교</td><th>나이</th><td>16</td>
                  </tr>
                  <tr>
                    <th>거주지</th><td>서초구</td>
                  </tr>
                </table>
              </CardBody>
            </div>
          </Card>
          
          <Row>
            <Colxx md="6">
            <Card style={{
              "height" : "95%"
            }}>
            <CardBody>
            <CardTitle style={{
                    "fontWeight":"bold",
                    "fontSize":"x-large"
                  }}>
                과목별 점수
              </CardTitle>
              <div>
              { profileStatuses.map((s) => {
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
                </div>
                </CardBody>
                </Card>
              </Colxx>
            <Colxx md="6">

            <Card className="mb-4" > 
            <CardBody>
            <CardTitle style={{
              "fontWeight":"bold",
              "fontSize":"x-large"
            }}>핵심역량</CardTitle>
                  {/* 그림자 레이더 차트 */}
                  <div className="chart-container" style={{"height":"200px"}}>
                    <Radar360  shadow 
                    data={radarChartData360} />
                  </div>
                  {/* 그림자 레이더 차트 */}
            </CardBody>
        </Card>
            </Colxx>
          </Row>
          <Row>
            <Colxx md="6">
            <Card style={{
                  "marginTop" :"1vh"
                  ,"height":"90%"
                }}>
                  <CardBody>
                    <CardTitle style={{
                    "fontWeight":"bold",
                    "fontSize":"x-large"
                    }}>나보다 성적이 높은 친구</CardTitle>
                    <Row style={{"marginTop" : "5vh"}}>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-2.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>
                        <CardText style={{
                          "fontSize":"large","padding":"0.5rem","textAlign":"center"
                        }}>잭슨</CardText>
                      </div>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-4.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>
                        <CardText style={{
                          "fontSize":"large","padding":"0.5rem","textAlign":"center"
                        }} >스테파니</CardText>
                      </div>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-5.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>  
                        <CardText style={{
                          "fontSize":"large","padding":"0.5rem","textAlign":"center"
                        }} >시리아</CardText>
                      </div>
                    </Row>
                    
                    </CardBody>
                    </Card>
              </Colxx>
              <Colxx md="6">
              <Card style={{
                  "marginTop" :"1vh"
                  ,"height":"90%"
                }}>
                  <CardBody>
                    <CardTitle style={{
                    "fontWeight":"bold",
                    "fontSize":"x-large"
                    }}>현재 위치</CardTitle>
                    
                    <div className="chart-container" style={{"height":"200px"}} >
                      <Line360 data={lineChartData360} /> 
                    </div>


                    </CardBody>
                    </Card>
              </Colxx>
              </Row>
        </Colxx>
        {/* 33% 세로 */}
        <Colxx md="4">
          
          <h2 style={{"paddingLeft" : "1vw","fontWeight":"bold"}}>다음 수업</h2>
          <Card className="d-flex flex-row mb-4" >
            {/* <ThumbnailImage rounded src="/assets/img/test3/eng.png" alt="https://www.flaticon.com/free-icons/english-language" className="m-4"/> */}
            <img src="/assets/img/test3/eng.png" alt="https://www.flaticon.com/free-icons/english-language" className="m-4" height="100px"/>
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <div> 
                  <CardTitle>영어</CardTitle>
                  <CardText>1. 듣기</CardText>
                  <CardText>2. 읽기</CardText>
                </div>
                </CardBody>
            </div>
          </Card>
          <Card className="d-flex flex-row mb-4" >
            {/* <ThumbnailImage rounded src="/assets/img/test3/king.png" alt="Card image cap" className="m-4"/> */}
            <img src="/assets/img/test3/king.png" alt="https://www.flaticon.com/free-icons/korean" className="m-4" height="100px"/>
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <div> 
                <CardTitle>국어</CardTitle>
                  <CardText>1. 작문</CardText>
                  <CardText>2. 말하기</CardText>
                </div>
                </CardBody>
            </div>
          </Card>
          
          <h2 style={{"paddingLeft" : "1vw","fontWeight":"bold","marginTop":"2vh"}}>학부모 전달용 메시지</h2>
          <Card className="mb-4">
            <CardBody>
              <CardTitle style={{"fontWeight":"bold","fontSize":"x-large"}}>성적 하락시</CardTitle>
              <CardText style={{"fontSize":"medium"}}>영어 학습이 불충분 하여 <br/>가정에서 지도편달 부탁드립니다.</CardText>
            </CardBody>
          </Card>
          <Card className="mb-4">
            <CardBody>
              <CardTitle  style={{"fontWeight":"bold","fontSize":"x-large"}}>성적 증가시</CardTitle>
              <CardText style={{"fontSize":"medium"}}>영어 성적이 상승하였습니다.<br/>가정에서 많은 칭찬 부탁드립니다.</CardText>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};

export default DO_STUDENT360;
