/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import data from 'data/cakesdkt';

const Cakes = () => {
  return (
    <Card className="dashboard-link-list">
      <CardBody>
        <CardTitle style={{
                    "font-weight":"bold"
                  }}>
          <IntlMessages id="학생리스트" />
        </CardTitle>
        <div className="d-flex flex-row">
          <div className="w-50">
            <table>
            {data.slice(0, 4).map((c, index) => {
              return (
                <tr key={`stulist_${index}`} >
                  <td 
                    style={{
                      "fontSize":"x-large"
                    }}>
                    <Button outline color="primary" className="mb-2">{c.title}</Button>
                  </td>
                </tr>
              )
            })}
            </table>
          </div>
          <div className="w-50">
            <table>
              {data.slice(4, 8).map((c, index) => {
                return (
                  <tr key={`stulist_${index}`} >
                    <td 
                      style={{
                        "fontSize":"x-large"
                      }}>
                      <Button outline color="primary" className="mb-2">{c.title}</Button>
                    </td>
                  </tr>
                )
              })}
              </table>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Cakes;
