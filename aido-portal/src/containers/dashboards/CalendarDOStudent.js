import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import CalendarToolbar from 'components/CalendarToolbar';
// import IntlMessages from 'helpers/IntlMessages';
// import data from 'data/eventsDo';

import { getDirection } from 'helpers/Utils';

const localizer = momentLocalizer(moment);

const CalendarCard = ({dt}) => {
  // console.log('dt : ' ,dt,'\n len : ',len)
  return (
    <Card>
      <CardBody>
        <CardTitle>
          월별 접속수
        </CardTitle>
        <Calendar
          localizer={localizer}
          style={{ minHeight: '500px' }}
          events={dt}
          rtl={getDirection().isRtl}
          views={['month']}
          components={{
            toolbar: CalendarToolbar,
          }}
        />
      </CardBody>
    </Card>
  );
};
export default CalendarCard;
