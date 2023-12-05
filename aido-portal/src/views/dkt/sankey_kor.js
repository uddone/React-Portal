import React from 'react';
import { Card,CardBody, CardTitle} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import kordataelement from 'data/sankey_kor_element';
import kordatamiddle from 'data/sankey_kor_middle';
import kordatah from 'data/sankey_kor_high';
import kordataa from 'data/sankey_kor_all';
import Sankeychart from './sankeyprops';


const SANKEY_KOR = () => {
  return (
    <div>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
              <Sankeychart props={kordataelement} hei={1050} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
              <Sankeychart props={kordatamiddle} hei={1050} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
              <Sankeychart props={kordatah} hei={1050} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
              <Sankeychart props={kordataa} hei={1050} />
          </CardBody>
        </Card>
      </Colxx>
    </div>
  );
};

export default SANKEY_KOR;
