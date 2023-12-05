import React from 'react';
import { Card, CardBody, CardTitle, CardHeader, CardText } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';

const RadialProgressCard = ({
  title = 'title',
  percent = 50,
  isSortable = false,
}) => {
  return (
    <Card>
      {isSortable && (
        <CardHeader className="p-0 position-relative">
          <div className="position-absolute handle card-icon">
            <i className="simple-icon-shuffle" />
          </div>
        </CardHeader>
      )}
      <CardTitle style={{
        "fontSize":"x-large",
        "fontWeight":"bold",
        "marginBottom":0,
        "padding":"1rem 1.75rem 0rem "
        }}>{title}</CardTitle>
      <CardBody className="d-flex justify-content-between align-items-center">
        {/* <Card style={{"box-shadow":"0 0px"}}>  */}
          {/* <CardBody className="d-flex justify-content-between align-items-center"> */}
            {/* <Row style={{"width":"100%"}}> */}
              <div style={{"float":"left","width":"70%"}}>    
                <CardText style={{"fontSize":"x-large","fontWeight":"bold"}}>김기리</CardText>
                <CardText style={{"fontSize":"large","color":"grey"}}>평균 성적 상승률</CardText>
              </div>
              
              <div className="progress-bar-circle" style={{"float":"right","width":"30%","height":"100%"}}>
                <CircularProgressbar
                  strokeWidth={4}
                  value={percent}
                  text={`${percent}%`}
                />
              </div>
            {/* </Row> */}
          </CardBody>
        {/* </Card>
      </CardBody> */}
    </Card>
  );
};
export default React.memo(RadialProgressCard);
