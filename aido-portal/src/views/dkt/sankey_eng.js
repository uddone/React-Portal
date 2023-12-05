import React from 'react';
import { Card,CardBody, CardTitle} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';  
// import engdata from "data/sankey_eng";
import engdatae from "data/sankey_eng_element";
import engdatam from "data/sankey_eng_middle";
import engdataa from "data/sankey_eng_all";
import Sankeychart from './sankeyprops';

const SANKEY_ENG = () => {
  return (
    <div>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={engdatae} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={engdatam} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle style={{"fontWeight":"bold"}}> SANKEY Chart</CardTitle>
            <Sankeychart props={engdataa} hei={1050}/>
          </CardBody>
        </Card>
      </Colxx>
    </div>
  );
};

export default SANKEY_ENG;
