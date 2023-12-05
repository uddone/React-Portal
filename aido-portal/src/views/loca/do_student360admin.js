import React from 'react';
import { Card, CardBody, CardTitle, Row, Table} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import './do_student.css'

import SalesChartCard from 'containers/dashboards/SalesChartCard';
import { Line360 } from 'components/charts';
import { lineChartData360 } from 'data/charts';
import RadialProgressCard from 'components/cards/RadialProgressCard';
import data1 from 'data/iconCards360';
import IconCard from 'components/cards/IconCard360';
import Calendar from 'containers/dashboards/Calendar';


const DO_ADMIN360 = () => {
  
    return (
    <div>
      <Row>
        <Colxx md="9">
          <Colxx md="12">
            <Row>
              <Colxx md="6">
                <Card>  
                  <CardBody>
                    <CardTitle>카드 제목</CardTitle>
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
                      "font-weight":"bold"
                      }}>위치</CardTitle>
                      
                      <div className="chart-container">
                        <Line360 data={lineChartData360} /> 
                      </div>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx md="12" style={{"marginTop" : "2vh"}}>
            <Card>
              <CardBody>
                <CardTitle>카드타이틀</CardTitle>
                <Table hover>
                  <thead>
                    <tr>
                      <th className='hed'>#</th>
                      <th className='hed'>First Name</th>
                      <th className='hed'>Last Name</th>
                      <th className='hed'>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
              
            </Card>
            
          </Colxx>
        </Colxx>
        <Colxx md="3">
          <Colxx md="12">
            <SalesChartCard />
          </Colxx>
          <Colxx md="12" style={{"marginTop":"2vh"}}>
            <RadialProgressCard
              title="타이틀"
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
