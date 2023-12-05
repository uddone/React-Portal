import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout2 from 'layout/AppLayout2';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DKT_MAIN = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dkt_main_math')
);

const DKT_ENG = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dkt_main_eng')
);
const DKT_KOR = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dkt_main_kor')
);
const DKT_SCIENCE = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dkt_main_science')
);

const DKT_STDLIST = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dkt_studentlist')
);
const SANKEY_KOR = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './sankey_kor')
);
const SANKEY_MATH = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './sankey_math')
);
const SANKEY_ENG = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './sankey_eng')
);
const SANKEY_SCIENCE = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './sankey_science')
);


// const Sankeychart = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './sankey/sankeyd3')
// );
const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  if(!cuser){
    window.location.href="/user/login";
  }
  
const AIDODKT= ({ match }) => {
  return (
    <AppLayout2>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/main/kor`}
            />
            <Route
              path={`${match.url}/main/math`}
              render={(props) => <DKT_MAIN {...props} />}
            />
            <Route
              path={`${match.url}/main/kor`}
              render={(props) => <DKT_KOR {...props} />}
            />
            <Route
              path={`${match.url}/main/eng`}
              render={(props) => <DKT_ENG {...props} />}
            />
            <Route
              path={`${match.url}/main/science`}
              render={(props) => <DKT_SCIENCE {...props} />}
            />
            <Route
              path={`${match.url}/studentlist`}
              render={(props) => <DKT_STDLIST {...props} />}
            />

            <Route
              path={`${match.url}/sankey_kor`}
              render={(props) => <SANKEY_KOR {...props} />}
            />
            
            <Route
              path={`${match.url}/sankey_eng`}
              render={(props) => <SANKEY_ENG {...props} />}
            />
            
            <Route
              path={`${match.url}/sankey_math`}
              render={(props) => <SANKEY_MATH {...props} />}
            />
            
            <Route
              path={`${match.url}/sankey_science`}
              render={(props) => <SANKEY_SCIENCE {...props} />}
            />
            
            {/* <Route
              path={`${match.url}/download`}
              render={(props) => <DO_DOWNLOAD {...props} />}
            />
            <Route
              path={`${match.url}/student/`}
              render={(props) => <DO_STUDENT  {...props} />}
            />
            <Route
              path={`${match.url}/student/:id`}
              render={(props) => <DO_STUDENT {...props} />}
            /> */}
            {/* <Route
              path={`${match.url}/sankey`}
              render={(props) => <Sankeychart  {...props} />}
            /> */}
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout2>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(AIDODKT));
