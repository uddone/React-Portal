import React from 'react';
import { Row, Card,CardBody, CardTitle,Progress,} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import IconCards from 'containers/ui/IconCardsdkt';
import {LineChartdkt,RadarChart} from 'components/charts';
import { linescience,radarscience,} from 'data/chartsdkt';
import profileStatuses from 'data/profileStatusesdkt_science';
import Sankeychart from 'views/dkt/sankey';
import data from 'data/iconCardsdkt_science';

const DKT_SCIENCE = () => {
  return (
    <div>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
            <IconCards props={data}/>
          </CardBody>
        </Card>
        </Colxx>
        </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                취약확률
              </CardTitle>
            {profileStatuses.map((s) => {
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
          </Card>
        </Colxx>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                취약개념
              </CardTitle>
              <div className="chart-container">
                    <RadarChart shadow data={radarscience} />
                  </div>
            </CardBody>
              {/* conversionChartData */}
          </Card>
        </Colxx>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card>
            <CardBody>
            <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                취약개념 정답률 변화 추이
              </CardTitle>
            <div className="chart-container">
                    <LineChartdkt shadow data={linescience} />
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
                    "fontWeight":"bold"
                  }}> 
                SANKEY Chart
              </CardTitle>
              <Sankeychart/>
            </CardBody>
          </Card>
        </Colxx>
      </Row>      
    </div>
  );
};

export default DKT_SCIENCE;
