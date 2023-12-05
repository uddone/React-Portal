import React from 'react';
import { Row, Card,CardBody, CardTitle,Progress,} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import IconCards from 'containers/ui/IconCardsdkt';
import {LineChartdkt,RadarChart} from 'components/charts';
import { linekor,radarkor,} from 'data/chartsdkt';
import profileStatuses from 'data/profileStatusesdkt_kor';

import data from 'data/iconCardsdkt_kor';
import weakmath from 'data/weak_math';

import Sankeychart from './sankeyprops';

const DKT_KOR = () => {
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
                    <RadarChart shadow data={radarkor} />
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
                    <LineChartdkt shadow data={linekor} />
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
              <Sankeychart props={weakmath} hei={550}/>
            </CardBody>
          </Card>
        </Colxx>
      </Row>      
    </div>
  );
};

export default DKT_KOR;
