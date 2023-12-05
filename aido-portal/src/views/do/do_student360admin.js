import React from 'react';
import { Card, CardBody, CardText, CardTitle, Row, Table} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import './do_admin360.css'

// import SalesChartCard from 'containers/dashboards/SalesChartCard';
import { BarAD } from 'components/charts';
import { BCDAdmin } from 'data/charts360';
import RadialProgressCard from 'components/cards/RadialProgressCard360';
import data1 from 'data/iconCards360';
import data2 from 'data/iconCards360-2';
import data3 from 'data/admin360stulist';
import IconCard from 'components/cards/IconCard360';
import Calendar from 'containers/dashboards/CalendarAdmin360';
import ThumbnailImage from 'components/cards/Thumbnail360';



const DO_ADMIN360 = () => {

const newd = new Date()

    return (
    <div>
      <Row>
        <Colxx md="8" style={{"paddingRight":0,"paddingLeft":0}}>
          <Colxx md="12">
            <Row>
              <Colxx md="6" style={{"paddingRight":0}}>
                <Card>  
                  <CardBody>
                    <CardTitle style={{
                      "fontWeight":"bold",
                      "fontSize":"x-large"
                    }}>과목별 성적변화</CardTitle>
                    <Row>
                      {data1.map((item) => {
                        return (
                        <div key={`icon_card_${item.title}`} style={{
                          "width":"33%"
                        }}>
                          <IconCard {...item} className="mb-4" />
                          </div>
                          );
                        })
                      }
                    </Row>
                    
                  </CardBody>
                </Card>
              </Colxx>

              <Colxx md="6">
                <Card 
                // style={{
                //   "height":"100%"
                // }}
                >
                  <CardBody>
                    <CardTitle style={{
                      "fontWeight":"bold",
                      "fontSize":"x-large"
                      }}>월별 이탈 및 유지자</CardTitle>
                      <CardText>전년 대비 6% 상승</CardText>
                      <div className="chart-container" style={{"marginTop":"30px"}}>
                        <BarAD data={BCDAdmin}/>
                      </div>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx md="12" style={{"marginTop" : "2vh"}}>
            <Card>
              <CardBody>
                <CardTitle style={{
                  "fontWeight":"bold",
                  "fontSize":"x-large"
                }}>학생 리스트</CardTitle>
                <Table hover>
                  <thead>
                    <tr>
                      <th className='hed'>학생명</th>
                      <th className='hed'>이탈알림</th>
                      <th className='hed'>유지율 증가 추이</th>
                      <th className='hed'>최신수강일자</th>
                      <th className='hed'>다음수강일자</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data3.map((item) => {
                    const stDate = new Date(item.recentregist)
                    const btMs = newd.getTime() - stDate.getTime() ;
                    let btDay = Math.floor(btMs / (1000*60*60*24));
                    let term ="일전"
                    if(btDay>=365){
                      btDay = Math.floor(btDay/365)
                      term="년전"
                    }else if(btDay>360){
                      btDay = 11
                      term="달전"
                    }else if(btDay>30){
                      btDay = Math.floor(btDay/30)
                      term="달전"
                    }
                    return (
                      <tr key={item.stdname}>
                        <th scope="row">
                        <ThumbnailImage rounded 
                          src={item.icon} 
                          alt="Card image cap" 
                          />{item.stdname}</th>
                        <td>
                          <button type="button" 
                            className={`btn btn-${item.exit}`}
                          /></td>
                        <td>{item.remainvalue}%{item.remain === "plus"?<strong style={{"color":"#4dc59d"}}>▲</strong>:<strong style={{"color":"#ff675a"}}>▼</strong>}</td>
                        <td>{btDay}{term}</td>
                        <td>{item.nextregist}</td>
                      </tr>
                    );
                  })}
                  </tbody>
                </Table>
              </CardBody>
              
            </Card>
            
          </Colxx>
        </Colxx>
        <Colxx md="4" style={{"paddingLeft":"1px","paddingRight":"1px"}}>
          <Colxx md="12">
            <Card>
              <CardBody>
                <CardTitle style={{
                  "fontWeight":"bold",
                  "fontSize":"x-large"
                }}>
                  학생 이탈 위험군 수
                </CardTitle>
                {data2.map((item) => {
                  return (
                    // <RadialProgressCard
                    //   key ={item.tltle}
                    //   title={item.title}
                    //   percent={item.value*100}
                    //   style={{"backgroundColor":item.color}}
                    //   isSortable
                    // /> 
                    <div key={item.title}> 
                      <div 
                        style={{
                          "width":"50%",
                          "float":"left",
                          "backgroundColor":item.backcolor,
                          "marginBottom" : "1vh"
                        }} 
                        key={`left_${item.title}`}>
                        <h6 style={{
                          "color":item.color,
                          "padding":"1vh",
                          "marginBottom":"0",
                          "fontSize":"x-large"
                          }}>{item.title}</h6>
                      </div>
                      <div 
                        style={{
                          "width":"50%"
                          ,"float":"right"
                          ,"backgroundColor":item.backcolor
                          ,"marginBottom" : "1vh"
                        }} 
                        key={`right_${item.title}`}>
                        <h6 style={{
                          "color":item.color,
                          "padding":"1vh",
                          "marginBottom":"0",
                          "textAlign":"end",
                          "fontSize":"x-large"
                          }}>{item.value}</h6>
                      </div>
                      
                    </div>
                  );
                })}  
                
              </CardBody>
            </Card>
            {/* <Row>
              
            </Row> */}
          </Colxx>
          <Colxx md="12" style={{"marginTop":"2vh"}}>
            <RadialProgressCard
              title="이달의 학생"
              percent="80"
              isSortable
            /> 
          </Colxx>
          <Colxx md="12" style={{"marginTop":"2vh"}}>
            <Calendar/>
          </Colxx>
            
            
          
        </Colxx>
      </Row>
      
    </div>
  );
};

export default DO_ADMIN360;
