/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, CardTitle } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import IconCard from 'components/cards/IconCard';



const IconCards = ({props}) => {
  return (
    <Row>
    <Colxx xxs="12">
      <CardTitle className="mb-4" style={{
                  "fontWeight":"bold"
                }}>
        취약확률
      </CardTitle>
      <Row className="icon-cards-row mb-2">
        {props.map((item, index) => {
          return (
            <Colxx xxs="6" sm="4" md="3" lg="2" key={`icon_card_${index}`}>
              <IconCard {...item} className="mb-4" />
            </Colxx>
          );
        })}
      </Row>
    </Colxx>
  </Row>
  );
};

export default IconCards;
