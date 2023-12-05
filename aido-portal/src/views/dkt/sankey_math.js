import React from 'react';
import { Card,CardBody, CardTitle} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import mathdatae from 'data/sankey_math_element';
import mathdatam from 'data/sankey_math_middle';
import mathdatah from 'data/sankey_math_high';
import mathdata from 'data/sankey_math_all';
import Sankeychart from './sankeyprops';

const SANKEY_KOR = () => {
  return (
    <div>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={mathdatae} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={mathdatam} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={mathdatah} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>

      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={mathdata} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>

    </div>
  );
};

export default SANKEY_KOR;
