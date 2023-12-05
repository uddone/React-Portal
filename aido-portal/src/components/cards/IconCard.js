import React from 'react';
import { Card, CardBody } from 'reactstrap';

const IconCard = ({ className = 'mb-4', icon, title, value }) => {
  console.log(icon, title, value)
  return (
    <div className={`icon-row-item ${className}`}>
      <Card>
        <CardBody className="text-center">
          {/* <i className={icon} /> */}
          <img src={icon} alt="써네밍" style={{
            "width":"100%","height":"100%"
          }} />
          <p className="card-text font-weight-semibold mb-0">
            {title}
          </p>
          <p className="lead text-center">{value}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(IconCard);
