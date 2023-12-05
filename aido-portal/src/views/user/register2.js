import React
  , { useState,useEffect } 
from 'react';
import {
  Row,
  Card,
  CardTitle,
  // Form,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import {
  NavLink,
} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Colxx } from 'components/common/CustomBootstrap';
import { NotificationManager } from 'components/common/react-notifications';
import { SHA3 } from 'sha3'; 

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = '비밀번호를 입력해주세요';
  } else if (value.length < 4) {
    error = '비밀번호는 4자리 이상으로 입력해주세요';
  }
  return error;
};

const validateTele = (value) => {
  console.log('sd : ',value)
  let error;
  if (!value) {
    error = '전화번호를 입력해주세요';
  } else if (!/^[0-9]{9,11}$/i.test(value)) {
    error = '유효하지 않은 전화번호 입니다.';
  }
  return error;
};
const validateName = (value) => {
  let error;
  if (!value) {
    error = '이름을 입력해주세요';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = '이메일을 입력해주세요';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = '유효하지 않은 이메일입니다.';
  }
  return error;
};
const validateId = (value) => {
  let error;
  if (!value) {
    error = '아이디를 입력해주세요';
  } else if (!/^[A-Z0-9._%+-]{5,10}$/i.test(value)) {
    error = '유효하지 않은 아이디입니다.';
  }
  return error;
};
const hash = new SHA3(512);
const Register2 = ({loading,error}) => {
  const [email] = useState();
  const [userid] = useState();
  const [tele] = useState();
  const [password] = useState();
  const [urnm] = useState();

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);
  
  
  const onUserRegister = (values) => {
    if (!loading){
      if (values.email !== '' && values.password !== ''&& values.userid !== ''&& values.urnm !== ''&& values.tele !== ''){
        hash.update(values.password)
        const pwd = hash.digest('hex')
        let url = process.env.REACT_APP_DB_HOST
        url +='/api/register'
        fetch(url,{
          method: "POST",
          headers: {"Content-Type": "application/json;charset=utf-8",},
          body:JSON.stringify({
            "id": values.userid,
            "pass": pwd,
            "email": values.email,
            "tele": values.tele,
            "name": values.urnm,
          })
        }).then(function(result){
          return result.json();
        }).then(function(json){
          return json.list.result
        }).then(function(status){
          if(status.status === 'ok'){
            alert('회원가입이 완료 되었습니다.')
            window.location.href="/user/login";
          }else{
            alert('회원가입도중 오류가 발생 했습니다. \n같은 오류가 반복될시 관리자에게 문의해주시기 바랍니다. \n📞02-6207-7744 ')
          }
        })
      }
    }
  };
  const initialValues = { email, password,userid,tele,urnm};
  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side "
          style={{
            "background":"no-repeat url('../assets/img/login/moon.jpg')"
          }}>
            <p className="text-white h1">회원가입</p>
            {/* <p className="white mb-0">
            </p> */}
          </div>
          <div className="form-side">
            {/* <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink> */}
            <CardTitle className="mb-4">
              회원정보
            </CardTitle>
            <Formik initialValues={initialValues} onSubmit={onUserRegister}>
            {({ errors, touched }) => (
              <Form>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  아이디
                </Label>
                <Field
                      className="form-control"
                      name="userid"
                      validate={validateId}
                    />
                    {errors.userid && touched.userid && (
                      <div className="invalid-feedback d-block">
                        {errors.userid || ''}
                      </div>
                    )}
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
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

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  이름
                </Label>
                <Field
                      className="form-control"
                      name="urnm"
                      validate={validateName}
                    />
                    {errors.urnm && touched.urnm && (
                      <div className="invalid-feedback d-block">
                        {errors.urnm || ''}
                      </div>
                    )}
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  이메일
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
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  전화번호
                </Label>
                <Field
                      className="form-control"                      
                      name="tele"
                      validate={validateTele}
                    />
                    {errors.tele && touched.tele && (
                      <div className="invalid-feedback d-block">
                        {errors.tele || ''}
                      </div>
                    )}
              </FormGroup>

              {/* <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  소속 회사
                </Label>
                <Field
                      className="form-control"                      
                      name="comp"
                      type="select"
                      validate={validateTele}
                    />
                    {/* <option value="1">에듀</option>
                    <option value="2">에이</option>
                    <option value="3">아이</option>
                    <option value="4">김동욱</option>
                </Field>
              </FormGroup> */}


              <div className="d-flex justify-content-between align-items-center">

                  <NavLink to="/user/login">
                  <Button
                  color="info"
                  outline
                  className="btn btn-multiple-state"
                  >
                    로그인
                    </Button>
                  </NavLink>
                
                
                <NavLink to="/user/forgot-password">
                <Button
                  color="info"
                  outline
                  className="btn btn-multiple-state"
                  >
                    비밀번호 찾기
                    </Button>
                </NavLink>
              <Button
              outline
                      color="info"
                      className={`btn btn-multiple-state ${
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
                        회원가입
                      </span>
                    </Button>
              </div>
            </Form>
            )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
export default Register2;
