import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  // BrowserRouter as Router,
  // Route,
  // Switch,
  // Redirect,
  NavLink,
} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { loginUser } from 'redux/actions';
import { SHA3 } from 'sha3'; 
import UserLayout from 'layout/UserLayout';

export const UserRole = {
  Admin: 0,
  Editor: 1,
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};
// let button;
// function authexist() {
//   return ( 
//     <Router>
//       <Switch>
//         <Route path="/">
//           <Redirect to="/app"/>
//         </Route>
//       </Switch>
//     </Router>
    
//   )
  
// }
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = '아이디를 입력해주세요';
  } else if (!/^[A-Z0-9._%+-]{5,10}$/i.test(value)) {
    error = '유효하지 않은 아이디입니다.';
  }
  return error;
};
// function loginblock()
const Login = ({ loading, error }) => {
  const [email] = useState();
  const [password] = useState();

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);
 const hash = new SHA3(512);
  const useOnUserLogin = (values) => {
    if (!loading){
      if (values.email !== '' && values.password !== '' ) {
        hash.update(values.password)
        const pwd = hash.digest('hex')
        
        hash.reset();
        hash.update(values.email)
        const uid = hash.digest('hex')

        // console.log(values.password,",",values.userid)
        // loginUserAction(values, history)   

        console.log(values.password,',',pwd)
        let url = process.env.REACT_APP_DB_HOST
        url +='/api/login'
        fetch(url,{
          method: "POST",
          headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          body:JSON.stringify({
              "id": values.email,
              "pass": pwd,
            })
          }).then(function(result){
            return result.json();
          }).then(function(json){
            return json.list.result
          }).then(function(urobj){
            console.log('user : ',urobj)
            if(urobj){
              try {
                let uath;
                if(urobj.USER_AUTH ==="SA"){
                  uath = 0;
                }else{
                  uath = 1;
                }
                const currentUser = {
                      id: urobj.USER_ID,
                      title: urobj.USER_ID,
                      img: '/assets/img/profiles/dukim_profile.jpg',
                      date: new Date(),
                      role: uath,
                      user_nm:urobj.USER_NM,
                      user_no:urobj.USER_NO,
                      bstro:urobj.BSTOR_CD,
                      cmpn:urobj.CMPN_CD,
                  }
                const item = { 'uid': uid, currentUser };
                
                if (item) {
                  localStorage.setItem('gogo_current_user', JSON.stringify(item));
                  // console.log(item)
                } else {
                  localStorage.removeItem('gogo_current_user');
                }
              } catch (error1) {
                console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
              }
              
            }
            // button = authexist()
            window.location.href="/";
          })
       }
    } 
      // if (values.email !== '' && values.password !== ''  && values.password !== '123456gogo') {
      //   
      // }
      //
  };
  const [user, setUser] = useState(null);
  const initialValues = { email, password };
  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
      clientId: "xWWG_6bRgVLqPDbzZz5Y",
      callbackUrl: "http://localhost:3000/user/login",
      isPopup: true,
      loginButton: {
        color: "green",
        type: 1,
        height: 50,
      },
  });
  const getUser = async () => {
    await naverLogin.getLoginStatus((status) => {
      console.log(`로그인?: ${status}`);
      if (status) {
        setUser({ ...naverLogin.user });
        window.close();
        window.opener.location.reload();
      }
    });
  };
    
  useEffect(() => {
    naverLogin.init();
    console.log("init!");
    getUser();
  }, []);

  if(user){
    console.log('user : ',user)
    hash.update(user.id)
    const pwd = hash.digest('hex')
    let url = process.env.REACT_APP_DB_HOST
    url +='/api/naverlogin'
    fetch(url,{
      method: "POST",
      headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      body:JSON.stringify({
        "jsson":user,
        "pwd" :pwd,
      })
    }).then(function(result){
      return result.json();
    }).then(function(json){
      return json.list.result
    }).then(function(urobj){
      console.log(urobj)
      let uath;
      if(urobj.USER_AUTH ==="SA"){
        uath = 0;
      }else{
        uath = 1;
      }
      const currentUser = {
        id: urobj.USER_ID,
        title: urobj.USER_ID,
        img: '/assets/img/profiles/dukim_profile.jpg',
        date: new Date(),
        role: uath,
        user_nm:urobj.USER_NM,
        user_no:urobj.USER_NO,
        bstro:urobj.BSTOR_CD,
        cmpn:urobj.CMPN_CD,
      }
      const item = { 'uid': urobj.id, currentUser };
          
      if (item) {
        localStorage.setItem('gogo_current_user', JSON.stringify(item));
      } else {
        localStorage.removeItem('gogo_current_user');
      }
      window.location.href="/";
    })
  }
   
  return (
    <UserLayout>

    
    <Row className="h-100">
      {/* {button} */}
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side " style={{
            "background":"no-repeat url('../assets/img/login/sample4.jpg')"
            
          }}>
            <p className="text-white h1">AIDO-SERVICE</p>
            <br/>
            <p className="white mb-0" style={{
              "fontSize" : "large"
            }}>
              에듀에이아이의 서비스 페이지 입니다
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              {/* <span className="logo-single" /> */}
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.login-title" />
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={useOnUserLogin} >
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      아이디
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email || ''}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      비밀번호
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password || ''}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/forgot-password">
                      비밀번호 찾기
                    </NavLink>
                    <NavLink to="/user/register">
                      회원가입
                    </NavLink>
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        로그인
                      </span>
                    </Button>
		<div>
			<div id="naverIdLogin" />
		</div>
	
                    {/* <NaverLogin/> */}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>

       
      </Colxx>
    </Row>
    </UserLayout>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
