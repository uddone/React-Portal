import React from 'react';
import { Card,CardBody, CardTitle} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import sciencedata from 'data/sankey_science_all';
import sciencedatae from 'data/sankey_science_element';
import sciencedatam from 'data/sankey_science_middle';
import sciencedatah from 'data/sankey_science_high';
import Sankeychart from './sankeyprops';

const SANKEY_KOR = () => {
  return (
    <div>
      
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={sciencedatae} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={sciencedatam} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={sciencedatah} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={sciencedata} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
    </div>
  );
};

export default SANKEY_KOR;
