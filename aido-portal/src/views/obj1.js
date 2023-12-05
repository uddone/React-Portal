import React from 'react';
import { Row, Card,CardBody,
  // ,CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu, 
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

import AppLayout2 from 'layout/AppLayout2';
// import IntlMessages from 'helpers/IntlMessages';
// import profileStatuses from 'data/profileStatuses';

const obj1 = ({  match }) => {
  return (
    <AppLayout2>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.analytics" match={match} />
          <Separator className="mb-5  "/>
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className="dashboard-filled-line-chart">
            <CardBody>
                <div className="btn-group float-right float-none-xs mt-2">
                <UncontrolledDropdown>
                  <DropdownToggle caret color="primary" className="btn-xs" outline>
                      message1
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      message2
                    </DropdownItem>
                    <DropdownItem>
                      message3
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx sm="12" md="6" className="mb-4">
          <Card className="dashboard-filled-line-chart">
            <CardBody>
            <Button color="primary" className="mb-2">
                  1
              </Button>
              <Button color="secondary" className="mb-2">
                 2
              </Button>
              <Button color="success" className="mb-2">
                  3
              </Button>
              <Button color="info" className="mb-2">
                  4
              </Button>
              <Button color="warning" className="mb-2">
                  5
              </Button>
              <Button color="danger" className="mb-2">
                  6
              </Button>
              <Button color="light" className="mb-2">
                  7
              </Button>
              <Button color="dark" className="mb-2">
                  8
              </Button>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <img src="/assets/img/testimg/김치말이국수.png" alt="김치말이국수" style={{
                "width":"100%"
              }}/>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              1 BY 3
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xl="4" lg="12" md="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
            1 BY 3
          </CardBody>
          </Card>
        </Colxx>
      </Row>      
      
    </AppLayout2>
  );
};

export default obj1;
