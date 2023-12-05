import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout2 from 'layout/AppLayout2';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
// const Pages = React.lazy(() =>
//   import(/* webpackChunkName: "pages" */ './pages')
// );
// const Applications = React.lazy(() =>
//   import(/* webpackChunkName: "applications" */ './applications')
// );
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
// const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
// const BlankPage = React.lazy(() =>
//   import(/* webpackChunkName: "blank-page" */ './blank-page')
// );
const Main = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './ln_main')
);
const Main2 = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './ln_main2')
);
const Upload = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './upload')
);
// const Upload2 = React.lazy(() =>
//   import(/* webpackChunkName: "blank-page" */ './upload2')
// );
const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  if(!cuser){
    window.location.href="/user/login";
  }
  
const AIDOLANG = ({ match}) => {
  return (
    <AppLayout2>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/upload`}
            />
            <Route
              path={`${match.url}/main`}
              render={(props) => <Main {...props} />}
            />
            <Route
              path={`${match.url}/main2`}
              render={(props) => <Main2 {...props} />}
            />
             <Route
              path={`${match.url}/upload`}
              render={(props) => <Upload {...props} />}
            />
            
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            
            {/* <Route
              path={`${match.url}/upload2`}
              render={(props) => <Upload2 {...props} />}
            /> */}
            {/* <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            />
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
  /> */}
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            {/*
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
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

export default withRouter(connect(mapStateToProps, {})(AIDOLANG));
