import React from 'react';
import { DashboardControl } from 'devexpress-dashboard-react';
import { Colxx } from 'components/common/CustomBootstrap';
// import AppLayout from 'layout/AppLayout';
// import AppLayout2 from 'layout/AppLayout2';


function Test3() {
  return (
    
      <row >
        <Colxx xxs="12" className="mb-4" style={{
          "height":"90vh"
        }}>          
        <DashboardControl  style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}
          endpoint="https://demos.devexpress.com/services/dashboard/api"
            //  endpoint="http://localhost:5000/api/dashboard"
            workingMode="Viewer"/> 
        </Colxx>
      {/* <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}> */}
        
      {/* </div> */}
      </row>
  );
}

export default Test3;
