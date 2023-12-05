import React from 'react';
import { Row, Card,CardBody, CardTitle,Progress,} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCards from 'containers/ui/IconCardsdkt';
import {LineChart,RadarChart,} from 'components/charts';
import { lineChartData,radarChartData,} from 'data/chartsdkt';
import profileStatuses from 'data/profileStatusesdkt';

const BlankPage2 = ({  match }) => {
  return (
    <div>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.analytics" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
            <IconCards />
          </CardBody>
        </Card>
        </Colxx>
        </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "font-weight":"bold"
                  }}>
                취약확률
              </CardTitle>
            {profileStatuses.map((s) => {
                return (
                  <div key={s.id} className="mb-4">
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
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "font-weight":"bold"
                  }}>
                취약개념
              </CardTitle>
              <div className="chart-container">
                    <RadarChart shadow data={radarChartData} />
                  </div>
            </CardBody>
              {/* conversionChartData */}
          </Card>
        </Colxx>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "font-weight":"bold"
                  }}>
                취약개념 정답률 변화 추이
              </CardTitle>
            <div className="chart-container">
                    <LineChart shadow data={lineChartData} />
                  </div>
            </CardBody>
              {/* conversionChartData */}
          </Card>
        </Colxx>
      </Row>
      <Row>
      <Colxx xxs="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
            <CardTitle style={{
                    "font-weight":"bold"
                  }}> 
                SANKEY Chart
              </CardTitle>
            </CardBody>
          </Card>
        </Colxx>
      </Row>      
    </div>
  );
};

export default BlankPage2;
