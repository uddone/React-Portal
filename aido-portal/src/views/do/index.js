import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout2 from 'layout/AppLayout2';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DO_MAIN = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_main')
);
const DO_DOWNLOAD = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_download')
);
const DO_STUDENT = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student')
);

const DO_STUDENT360 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360')
);
const DO_STUDENT360_1 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360_1')
);
const DO_STUDENT360_2 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360_2')
);
const DO_STUDENT360_3 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360_3')
);
const DO_STUDENT360_4 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360_4')
);

const DO_ADMIN360 = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './do_student360admin')
);
// const Sankeychart = React.lazy(() =>
//   import(/* webpackChunkName: "dashboards" */ './sankey/sankeyd3')
// );
const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  if(!cuser){
    window.location.href="/user/login";
  }
  
const AIDODROPOUT= ({ match }) => {
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
              render={(props) => <DO_MAIN {...props} />}
            />
            <Route
              path={`${match.url}/download`}
              render={(props) => <DO_DOWNLOAD {...props} />}
            />
            <Route
              path={`${match.url}/student/`}
              render={(props) => <DO_STUDENT  {...props} />}
            />
           <Route
              path={`${match.url}/student360`}
              render={(props) => <DO_STUDENT360  {...props} />}
            />
            <Route
              path={`${match.url}/student360_1`}
              render={(props) => <DO_STUDENT360_1  {...props} />}
            />
            <Route
              path={`${match.url}/student360_2`}
              render={(props) => <DO_STUDENT360_2  {...props} />}
            />
            <Route
              path={`${match.url}/student360_3`}
              render={(props) => <DO_STUDENT360_3  {...props} />}
            />
            <Route
              path={`${match.url}/student360_4`}
              render={(props) => <DO_STUDENT360_4  {...props} />}
            />
            <Route
              path={`${match.url}/admin360`}
              render={(props) => <DO_ADMIN360  {...props} />}
            />
            <Route
              path={`${match.url}/student/:id`}
              render={(props) => <DO_STUDENT {...props} />}
            />
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

export default withRouter(connect(mapStateToProps, {})(AIDODROPOUT));
