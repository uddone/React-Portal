import React from 'react';
import { Card, Row} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import AppLayout2 from 'layout/AppLayout2';

const obj1 = ({  match }) => {
  return (
    <AppLayout2>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.analytics" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <Card>
            1 cardTestpage2
          </Card>
          
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          2 card
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          3 card
        </Colxx>

        <Colxx xl="4" lg="6" md="12" className="mb-4">
          4 card
        </Colxx>
        <Colxx xl="4" lg="12" md="12">
          5 card 
        </Colxx>
      </Row>      
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          6 card
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          7 card
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          8 card
        </Colxx>
      </Row>
    </AppLayout2>
  );
};

export default obj1;
