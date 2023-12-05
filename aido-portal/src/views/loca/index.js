import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout2 from 'layout/AppLayout2';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const LOCA_MAIN = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './loca_main')
);
const DO_DOWNLOAD = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_download')
);
const LOCA_STUDENT = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './loca_student')
);

const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  if(!cuser){
    window.location.href="/user/login";
  }
  
const AIDOLOCA= ({ match }) => {
  return (
    <AppLayout2>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/main`}
            />
            <Route
              path={`${match.url}/main`}
              render={(props) => <LOCA_MAIN {...props} />}
            />
            <Route
              path={`${match.url}/download`}
              render={(props) => <DO_DOWNLOAD {...props} />}
            />
            <Route
              path={`${match.url}/student/`}
              render={(props) => <LOCA_STUDENT  {...props} />}
            />
            <Route
              path={`${match.url}/student/:id`}
              render={(props) => <LOCA_STUDENT {...props} />}
            />
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

export default withRouter(connect(mapStateToProps, {})(AIDOLOCA));
