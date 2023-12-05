import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Progress, Row} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import './do_student360.css'
import profileStatuses from 'data/profileStatusesdkt';
import ThumbnailImage from 'components/cards/ThumbnailImage';
import { Line360, Radar360 } from 'components/charts';
import { radarChartData360,lineChartData360 } from 'data/charts';
import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

const DO_STUDENT360 = () => {
  
    return (
    <div>
      <Row>
        <Colxx md="8">
          <Card className="d-flex flex-row mb-4">
            <img src="/assets/img/profiles/리차드슨.png" alt="Card cap" className="m-4" />
            <div className="d-flex flex-grow-1 min-width-zero">
              <CardBody>
                <CardSubtitle style={{"fontSize":"xx-large"}}>리차드슨</CardSubtitle>
                <table>
                  <tr>
                    <th>asdfsdf</th><td>xcvxcvxcv</td><th>asdfsdf</th><td>xcvxcvxcv</td>
                  </tr>
                  <tr>
                    <th>asdfsdf</th><td>xcvxcvxb</td><th>asdfsdf</th><td>xcvxcvxcv</td>
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
                    "font-weight":"bold"
                  }}>
                취약확률
              </CardTitle>
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
                </CardBody>
                </Card>
              </Colxx>
            <Colxx md="6">

            <Card className="mb-4" > 
            <CardBody>
            <CardTitle> 영역별 강세 </CardTitle>
                  {/* 그림자 레이더 차트 */}
                  <div className="chart-container">
                    <Radar360   shadow data={radarChartData360} />
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
                    "font-weight":"bold"
                    }}>제껴</CardTitle>
                    <Row style={{"marginTop" : "5vh"}}>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-2.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>
                        <CardText><strong style={{
                          "color":colors.themeColor1
                        }}>1등</strong> 연성주 </CardText>
                        <CardText>평균 <strong style={{
                          "color":colors.themeColor1
                        }}>2</strong>점 차이</CardText>
                      </div>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-3.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>
                        <CardText><strong style={{
                          "color":colors.themeColor2
                        }}>2등</strong> 양재빈 </CardText>
                        <CardText>평균 <strong style={{
                          "color":colors.themeColor2
                        }}>1</strong>점 차이</CardText>
                      </div>
                      <div style={{"width":"32%","marginRight":"1%"}}>
                        <img src='/assets/img/profiles/l-8.jpg' alt ='리차드슨' style={{"width" : "100%"}}/>  
                        <CardText><strong style={{
                          "color":colors.themeColor3
                        }}>3등</strong> 김동욱 </CardText>
                        <CardText>평균 <strong style={{
                          "color":colors.themeColor3
                        }}>0.5</strong>점 차이 </CardText>
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
                    "font-weight":"bold"
                    }}>위치</CardTitle>
                    
                    <div className="chart-container" >
                      <Line360 data={lineChartData360} /> 
                    </div>


                    </CardBody>
                    </Card>
              </Colxx>
              </Row>
        </Colxx>
        {/* 33% 세로 */}
        <Colxx md="4"><h2 style={{"paddingLeft" : "1vw"}}>메시지</h2>
        <Card className="d-flex flex-row mb-4">
          <ThumbnailImage rounded src="/assets/img/test3/고위험군.jpg" alt="Card image cap" className="m-4"/>
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody>
              <div> 
                <CardTitle>기준 미만시 보내질 리포트 </CardTitle>
                <CardText>귀하의 자녀의 학업수준이 미달되었습니다.</CardText>
                <CardText>지도편달 부탁드립니다.</CardText>
                <CardText>지난 달 대비 평균 0.5등급 하락 </CardText>
              </div>
              </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-4" >
          <ThumbnailImage rounded src="/assets/img/test3/유지.jpg" alt="Card image cap" className="m-4"/>
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody>
              <div> 
                <CardTitle>기준 도달시 보내질 리포트 </CardTitle>
                <CardText>귀하의 자녀의 학업수준이 우수합니다.</CardText>
                <CardText>따뜻한 격려 부탁드립니다.</CardText>
                <CardText>지난 달 대비 평균 1.3등급 상승 </CardText>
              </div>
              </CardBody>
          </div>
        </Card>
        <h2 style={{"paddingLeft" : "1vw"}}>다음 일정</h2>
        <Card className="d-flex flex-row mb-4" >
          <ThumbnailImage rounded src="/assets/img/test3/월화고기.png" alt="Card image cap" className="m-4"/>
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody>
              <div> 
                <CardTitle>영어학원</CardTitle>
                <CardText>잉클윙클</CardText>
                <CardText>18:30 ~ 20:00 </CardText>
              </div>
              </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-4" >
          <ThumbnailImage rounded src="/assets/img/test3/김치말이국수.png" alt="Card image cap" className="m-4"/>
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody>
              <div> 
              <CardTitle>수학과외</CardTitle>
                <CardText>정승제 수학과외 </CardText>
                <CardText>20:30 ~ 22:00 </CardText>
              </div>
              </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-4" >
          <ThumbnailImage rounded src="/assets/img/test3/저위험군.jpg" alt="Card image cap" className="m-4"/>
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody>
              <div> 
                <CardTitle>사회 탐구</CardTitle>
                <CardText>2023 이지영 사회문화</CardText>
                <CardText>22:00 ~ 23:00 </CardText>
              </div>
              </CardBody>
          </div>
        </Card>
        </Colxx>
      </Row>
    </div>
  );
};

export default DO_STUDENT360;
