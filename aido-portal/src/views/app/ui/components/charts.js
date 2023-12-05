import React from 'react';
import { Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IntlMessages from 'helpers/IntlMessages';

import {
  DoughnutChart,
  LineChart,
  PolarAreaChart,
  AreaChart,
  ScatterChart,
  BarChart,
  RadarChart,
  PieChart,
} from 'components/charts';

import {
  lineChartData,
  polarAreaChartData,
  areaChartData,
  scatterChartData,
  barChartData,
  radarChartData,
  pieChartData,
  doughnutChartData,
} from 'data/charts';

const ChartsUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.charts" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.line" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 곡선 그래프 */}
                  <div className="chart-container">
                    <LineChart shadow data={lineChartData} />
                  </div>
                   {/* 그림자 곡선 그래프 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 곡선 그래프 */}
                  <div className="chart-container">
                    <LineChart data={lineChartData} />
                  </div>
                  {/* 곡선 그래프 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.polar" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 원형 영역 차트 */}
                  <div className="chart-container">
                    <PolarAreaChart shadow data={polarAreaChartData} />
                  </div>
                  {/* 그림자 원형 영역 차트 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 원형 영역 차트 */}
                  <div className="chart-container">
                    <PolarAreaChart data={polarAreaChartData} />
                  </div>
                   {/* 원형 영역 차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.area" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 영역 차트 */}
                  <div className="chart-container">
                    <AreaChart shadow data={areaChartData} />
                  </div>
                  {/* 그림자 영역 차트 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 영역차트 */}
                  <div className="chart-container">
                    <AreaChart data={areaChartData} />
                  </div>
                  {/* 영역차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.scatter" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 산점도 */}
                  <div className="chart-container">
                    <ScatterChart shadow data={scatterChartData} />
                  </div>
                  {/* 그림자 산점도 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 산점도 */}
                  <div className="chart-container">
                    <ScatterChart data={scatterChartData} />
                  </div>
                  {/* 산점도 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.bar" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 막대 차트 */}
                  <div className="chart-container">
                    <BarChart shadow data={barChartData} />
                  </div>
                  {/* 그림자 막대 차트 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 막대 차트 */}
                  <div className="chart-container">
                    <BarChart data={barChartData} />
                  </div>
                  {/* 막대 차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.radar" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 레이더 차트 */}
                  <div className="chart-container">
                    <RadarChart shadow data={radarChartData} />
                  </div>
                  {/* 그림자 레이더 차트 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 레이더 차트 */}
                  <div className="chart-container">
                    <RadarChart data={radarChartData} />
                  </div>
                  {/* 레이더 차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.pie" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 파이 차트 */}
                  <div className="chart-container">
                    <PieChart shadow data={pieChartData} />
                  </div>
                  {/* 그림자 파이 차트 */}
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 파이 차트 */}
                  <div className="chart-container">
                    <PieChart data={pieChartData} />
                  </div>
                  {/* 파이 차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="charts.doughnut" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.shadow" />
                  </CardSubtitle>
                  {/* 그림자 도넛 차트 */}
                  <div className="chart-container">
                    <DoughnutChart data={doughnutChartData} />
                  </div>
                  {/* 그림자 도넛 차트 */}
                </Colxx>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>
                    <IntlMessages id="charts.no-shadow" />
                  </CardSubtitle>
                  {/* 도넛 차트 */}
                  <div className="chart-container">
                    <DoughnutChart data={doughnutChartData} />
                  </div>
                  {/* 도넛 차트 */}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default ChartsUi;
