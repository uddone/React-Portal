import React from 'react';
import { Card, CardBody, CardText, Progress } from 'reactstrap';

const IconCard = ({ className = 'mb-4', title, value,score}) => {
  // console.log(icon, title, value)
  return (
    <div className={`icon-row-item ${className}`}>
      <Card>
        <CardBody className="text-center">
          {/* <i className={icon} /> */}
          <CardText style={{"color":"grey"}}>{score}</CardText>
          <CardText className="card-text font-weight-semibold mb-0">
            {title}
          </CardText>
          <CardText>{value*100}%</CardText>
          <Progress value={(value) * 800} 
          style={{"backgroundColor":"white"}} 
          color={score === "high"?'success':'danger'}/>
          {/* #4dc59d */}
          
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(IconCard);
