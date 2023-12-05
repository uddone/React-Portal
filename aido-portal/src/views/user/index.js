import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Login = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './login')
);

const Login2 = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './login2')
);
// const Register2 = React.lazy(() =>
//   import(/* webpackChunkName: "user-register" */ './register')
// );
const Register = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ './register2')
);
// const ForgotPassword2 = React.lazy(() =>
//   import(/* webpackChunkName: "user-forgot-password" */ './forgot-password')
// );
const ForgotPassword = React.lazy(() =>
  import(/* webpackChunkName: "user-forgot-password" */ './forgot-password2')
);
const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ './reset-password')
);
const Account = React.lazy(() => 
  import('./account')
)

const User = ({ match }) => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route
          path={`${match.url}/login2`}
          render={(props) => <Login {...props} />}
        />
        <Route
          path={`${match.url}/register`}
          render={(props) => <Register {...props} />}
        />
        <Route
          path={`${match.url}/forgot-password`}
          render={(props) => <ForgotPassword {...props} />}
        />
        <Route
          path={`${match.url}/reset-password`}
          render={(props) => <ResetPassword {...props} />}
        />
        <Route
          path={`${match.url}/login`}
          render={(props) => <Login2 {...props} />}
        />
        <Route
          path={`${match.url}/account`}
          render={(props) => <Account {...props} />}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
};

export default User;
