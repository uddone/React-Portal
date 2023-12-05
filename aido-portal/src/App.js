import React, { Suspense, useEffect
  // ,useState 
} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './helpers/Firebase';
import AppLocale from './lang';
// import ColorSwitcher from './components/common/ColorSwitcher';
import { NotificationContainer } from './components/common/react-notifications';
import {
  // isMultiColorActive,
  adminRoot,
  UserRole,
} from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { ProtectedRoute } from './helpers/authHelper';

const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/app')
);
const Dropout = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/do')
);
const DKT = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/dkt')
);
const LOCA = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/loca')
);

const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const ViewUnauthorized = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/unauthorized')
);

const Test3 = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/testpage3')
);

const Dkt2 = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/dktblank2')
);
const Dkt3 = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/dktblank3')
);
const BlankPage2 = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/blank-page2')
);



const App = ({ locale }) => {
  const direction = getDirection();
  const currentAppLocale = AppLocale[locale];
  useEffect(() => {
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }, [direction]);
  
  const isAuthorized = localStorage.getItem('gogo_current_user');

  return (
    <div className="h-100">
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <>
          <NotificationContainer />
          {/* {isMultiColorActive && <ColorSwitcher />} */}
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <ProtectedRoute
                  path={adminRoot}
                  component={ViewApp}
                  roles={[UserRole.Admin, UserRole.Editor]}
                />
               
               <Route
                  path="/do"
                  render={(props) => <Dropout {...props} />}
                />
                <Route
                  path="/loca"
                  render={(props) => <LOCA {...props} />}
                />
                
               <Route
                  path="/dkt"
                  render={(props) => <DKT {...props} />}
                />
                
                <Route
                  path="/dkt2"
                  render={(props) => <Dkt2 {...props} />}
                />
                
                <Route
                  path="/dkt3"
                  render={(props) => <Dkt3 {...props} />}
                />
                 <Route
                  path="/blank2"
                  render={(props) => <BlankPage2 {...props} />}
                />

                <Route
                  path="/user"
                  render={(props) => <ViewUser {...props} />}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <ViewError {...props} />}
                />
                <Route
                  path="/unauthorized"
                  exact
                  render={(props) => <ViewUnauthorized {...props} />}
                /> 
                 <Route
                  path="/test3"
                  exact
                  render={(props) => <Test3 {...props} />}
                />                 
                <Route
                  path="/"
                  exact
                  // render={(props) => <ViewHome {...props} />} 
                  >
                   {!isAuthorized ? <Redirect to="/user" /> : <Redirect to="/ln" />}
                  </Route>
                {/*
                <Redirect exact from="/" to={adminRoot} />
                */}
                <Redirect to="/error" />
              </Switch>
            </Router>
          </Suspense>
        </>
      </IntlProvider>
    </div>
  );
};

const mapStateToProps = ({ authUser, settings }) => {
  const { currentUser } = authUser;
  const { locale } = settings;
  return { currentUser, locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
