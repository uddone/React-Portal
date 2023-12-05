import React from 'react';
import { Row,Card,CardBody} from 'reactstrap';

const BlankPage5 = () => {

  const script = document.createElement("script");
  script.src = 'https://portal.aido.services:8081/body.js'
  script.async = false;
  document.head.appendChild(script);

  return ( 
  <div>
    <Row>
    <div className="col-md-4">
      <Card className="mb-4" >
        <CardBody>  
          <div id="container">
            <svg id='vuvle' width="1000" height="600" fontFamily="sans-serif" fontSize="10" textAnchor="middle"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMinYMin meet"/>
          </div>
        </CardBody>
      </Card>
    </div>
    </Row>
  </div>
  )
};

export default BlankPage5;
