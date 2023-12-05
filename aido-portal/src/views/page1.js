import React from 'react';
import { Row, Card,CardBody,CardTitle,CardText,
//   UncontrolledDropdown,
//   DropdownItem,
//   DropdownToggle,
//   DropdownMenu, 
  Button,
  // Progress,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

// import SortableStaticticsRow from 'containers/dashboards/SortableStaticticsRow';
// import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
// import {
  // DoughnutChart,
  // LineChart,
  // PolarAreaChart,
  // AreaChart,
  // ScatterChart,
  // BarChart,
  // RadarChart,
  // PieChart,
// } from 'components/charts';

// import {
//   lineChartData,
//   polarAreaChartData,
//   // areaChartData,
//   radarChartData,
//   // doughnutChartData,
//   // conversionChartData
// } from 'data/charts';

import AppLayout from 'layout/AppLayout';
// import IntlMessages from 'helpers/IntlMessages';
// import profileStatuses from 'data/profileStatuses';

const obj1 = ({  match }) => {
  return (
    <AppLayout>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.analytics" match={match} />
          <Separator className="mb-5  "/>
        </Colxx>
      </Row>

      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
            <CardTitle>.mp3 파일 업로드</CardTitle>
                <div style={{
                  "text-align":"center"
                }}>
                <img src="/assets/img/image_folder/mp3.png" alt=".mp3 파일 업로드" 
            //   style={{"width":"100%"}}
              />
                </div>
              
              <CardText style={{
                "text-align":"center"
              }} >파일을 끌어서 놓기</CardText>
              
              <Button outline color="success" className="mb-2" style={{
                "float":"right"
              }}>
                업로드
              </Button>{' '}
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
            <CardTitle>음성녹음</CardTitle>
            <div  style={{
              "text-align":"center"
            }} >
            <img src="/assets/img/image_folder/rec.png" alt="음성녹음" 
           />
            
            </div>
            <CardText> </CardText>
              <Button outline color="success" className="mb-2" style={{
                "float":"left"
              }}>
                ■
              </Button>{' '}
              <Button outline color="success" className="mb-2" style={{
                "float":"right"
              }}>
                업로드
              </Button>{' '}
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>TEXT 입력</CardTitle>
              <div style={{
                "height":"12vh"
              }}>
                <textarea
                  style={{
                    "width":"100%",
                    "height":"90%",
                    "border":"none"
                  }}
                />
              </div>
              <div style={{
                "float":"right"
              }}>
              <Button outline color="success" className="mb-2">
                업로드
              </Button>{' '}
              </div>
              
          </CardBody>
          </Card>
        </Colxx>
      </Row>      

      <Row className="mb-4">
        <Colxx xl="12" lg="12" md="12">
          <Card className="h-100"> 
            <CardBody>
              <CardTitle>결과 TEXT</CardTitle>
              <div style={{
                "height":"20vh"
              }}>
                <textarea
                  style={{
                    "width":"100%",
                    "height":"90%",
                    "border":"none"
                  }}
                />
              </div>
              <div style={{
                "float":"right"
              }}>
              <Button outline color="success" className="mb-2">
                수정
              </Button>{' '}
              <Button outline color="success" className="mb-2">
                평가
              </Button>{' '}

              </div>
              
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </AppLayout>
  );
};

export default obj1;
