import React ,{useState,useEffect}from 'react';
import {Row,Card,CardTitle,FormGroup,Label,Button} from 'reactstrap';
// 
// import {NavLink} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Colxx } from 'components/common/CustomBootstrap';
import AppLayout2 from 'layout/AppLayout2';
import { SHA3 } from 'sha3'; 
import { NotificationManager } from 'components/common/react-notifications';
import { ThemeColors } from 'helpers/ThemeColors';
// import { isMultiColorActive } from 'constants/defaultValues';
import ColorSwitcher2 from 'components/common/ColorSwitcher2';

const colors = ThemeColors();
// const validatePassword = (value) => {
//   let error;
//   if (!value) {
//     error = '비밀번호를 입력해주세요';
//   } else if (value.length < 4) {
//     error = '비밀번호는 4자리 이상으로 입력해주세요';
//   }
//   return error;
// };

const validateTele = (value) => {
  let error;
  if (!value) {
    error = '전화번호를 입력해주세요';
  } else if (!/^\d{3}-\d{3,4}-\d{4}$/i.test(value)) {
    error = '유효하지 않은 전화번호 입니다.';
  }
  return error;
};
const validateName = (value) => {
  console.log('name : ',value)
  let error;
  if (!value) {
    error = '이름을 입력해주세요';
  }
  return error;
};

const validateEmail = (value) => {
  console.log('email : ',value)
  let error;
  if (!value) {
    error = '이메일을 입력해주세요';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = '유효하지 않은 이메일입니다.';
  }
  return error;
};
const validateId = (value) => {
  console.log('id : ',value)
  let error;
  if (!value) {
    error = '아이디를 입력해주세요';
  } else if (!/^[A-Z0-9._%+-]{5,10}$/i.test(value)) {
    error = '유효하지 않은 아이디입니다.';
  }
  return error;
};
const hash = new SHA3(512);


const locstrg = localStorage.getItem('gogo_current_user');
let userrno = JSON.parse(locstrg)
userrno = userrno.currentUser
userrno = userrno.user_no
const Account = ({loading,error}) => {
  const [urobj,setUrobj]=useState();
  const [email] = useState();
  const [userid] = useState();
  const [tele] = useState();
  const [password] = useState();
  const [urnm] = useState();
  
  
  useEffect(() => {
    let url = process.env.REACT_APP_DB_HOST
    url +='/api/getuser'
  fetch(url,{
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    body:JSON.stringify({"id":userrno})
  }).then(function(result){
    return result.json(); 
  }).then(function(json){
    setUrobj(json.list.result)
    console.log(json.list.result)
  })
  },[])


  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);
  
  
  const onUserinfoChg = (values) => {
    if (!loading){
      if (values.email !== '' && values.password !== ''&& values.userid !== ''&& values.urnm !== ''&& values.tele !== ''){
        hash.update(values.password)
        
        console.log(values)

        // const pwd = hash.digest('hex')
        // let url = process.env.REACT_APP_DB_HOST
        // url +='/api/register'
        // fetch(url,{
        //   method: "POST",
        //   headers: {"Content-Type": "application/json;charset=utf-8",},
        //   body:JSON.stringify({
        //     "id": values.userid,
        //     "pass": pwd,
        //     "email": values.email,
        //     "tele": values.tele,
        //     "name": values.urnm,
        //   })
        // }).then(function(result){
        //   return result.json();
        // }).then(function(json){
        //   return json.list.result
        // }).then(function(status){
        //   if(status.status === 'ok'){
        //     alert('회원가입이 완료 되었습니다.')
        //     window.location.href="/user/login";
        //   }else{
        //     alert('회원가입도중 오류가 발생 했습니다. \n같은 오류가 반복될시 관리자에게 문의해주시기 바랍니다. \n📞02-6207-7744 ')
        //   }
        // })
      }
    }
  };

  let idinfo;
  let nminfo;
  let telinfo;
  let emailinfo;
  let idstr;
  let nmstr;
  let telstr;
  let emailstr;

//   function handelChange(e,divine){
//     e.preventDefault();
//     // console.log('divine : ',e.target.value)
    
//     switch(divine){
//       case "id" :
//         idinfo = e.target.value;
//         idstr = <Field className="form-control" name="userid" validate={validateId} value={idinfo} onChange={(event)=>handelChange(event,"id")}/>
//         break;
//       case "nm" :
//         nminfo = e.target.value;
//         nmstr = <Field className="form-control" name="urnm" validate={validateName} value={nminfo} onChange={(event)=>handelChange(event,"nm")}/>
//         break;
//       case "email" :
//         emailinfo = e.target.value;
//         emailstr = <Field className="form-control" name="email" validate={validateEmail} value={emailinfo} onChange={(event)=>handelChange(event,"email")}/>
//         break;
//       case "tel" :
//         telinfo = e.target.value;
//         telstr = <Field className="form-control" name="tele" validate={validateTele}value={telinfo}  onChange={(event)=>handelChange(event,"tel")}/> 
//         break;
//       default :
//         console.log("default");
//     }
// }
  function handelClick(e,divine){
    e.preventDefault();
    // console.log('divine : ',e.target.value)
    
    switch(divine){
      case "id" :
        idinfo = e.target.value;
        idstr = <Field className="form-control" name="userid" validate={validateId} />
        break;
      case "nm" :
        nminfo = e.target.value;
        nmstr = <Field className="form-control" name="urnm" validate={validateName} />
        break;
      case "email" :
        emailinfo = e.target.value;
        emailstr = <Field className="form-control" name="email" validate={validateEmail}/>
        break;
      case "tel" :
        telinfo = e.target.value;
        telstr = <Field className="form-control" name="tele" validate={validateTele}/> 
        break;
      default :
        console.log("default");
    }
  }
  const initialValues = { email, password,userid,tele,urnm};
  
 
  if(!urobj){
    idstr = <Field className="form-control" name="userid" validate={validateId}/>
    nmstr = <Field className="form-control" name="urnm" validate={validateName} />
    emailstr = <Field className="form-control" name="email" validate={validateEmail} />
    telstr = <Field className="form-control" name="tele" validate={validateTele} />
  }else{
    idinfo = urobj.USER_ID
    nminfo=urobj.USER_NM
    telinfo=urobj.TEL_NO
    emailinfo=urobj.EMAIL_ADR 
    idstr = <Field className="form-control" name="userid" validate={validateId} value={idinfo } onFocus={(event)=>handelClick(event,"id")}/>
    nmstr = <Field className="form-control" name="urnm" validate={validateName} value={nminfo} onFocus={(event)=>handelClick(event,"nm")}/>
    emailstr = <Field className="form-control" name="email" validate={validateEmail} value={emailinfo} onFocus={(event)=>handelClick(event,"email")}/>
    telstr = <Field className="form-control" name="tele" validate={validateTele} value={telinfo} onFocus={(event)=>handelClick(event,"tel")}/> 
  }
    return (
        
        <AppLayout2>
            <div className="dashboard-wrapper">
                <Row className="h-100">
                    <Colxx xxs="12" md="10" className="mx-auto my-auto">
                        <Card className="auth-card">
                            <div
                            // className="position-relative image-side"
                             style={{"background":`linear-gradient( to right, ${colors.themeColor1_10},${colors.themeColor1})`}}>
                                <p className="text-white h2" 
                                style={{"padding":"120px 25px 100px 25px"}}
                                >개인 정보 설정</p>
                                {/* <p className="white mb-0"> </p> */}
                            </div>
                            <div className="form-side">
                                <CardTitle className="mb-4">회원정보</CardTitle>
                                <Formik initialValues={initialValues} onSubmit={onUserinfoChg}>
                                    {({ errors, touched }) => (
                                    <Form>
                                      <FormGroup className="form-group has-float-label  mb-4">
                                        <Label>아이디</Label>
                                        {idstr}
                                        {errors.userid && touched.userid && (<div className="invalid-feedback d-block">{errors.userid || ''}</div>)}
                                      </FormGroup>

                                      <FormGroup className="form-group has-float-label  mb-4">
                                        <Label>비밀번호</Label>
                                        <Field className="form-control" type="password" name="password" disabled/>
                                        {errors.password && touched.password && ( 
                                          <div className="invalid-feedback d-block">
                                            {errors.password || ''}
                                          </div>
                                        )}
                                      </FormGroup>
                                      
                                      <FormGroup className="form-group has-float-label  mb-4">
                                        <Label>이름</Label>
                                        {nmstr}
                                        {errors.urnm && touched.urnm && (
                                          <div className="invalid-feedback d-block">
                                            {errors.urnm || ''}
                                          </div>
                                        )}
                                      </FormGroup>

                                      <FormGroup className="form-group has-float-label  mb-4">
                                        <Label>이메일</Label>
                                        {emailstr}
                                        {errors.email && touched.email && (
                                          <div className="invalid-feedback d-block">
                                            {errors.email || ''}
                                          </div>
                                        )}
                                      </FormGroup>

                                      <FormGroup className="form-group has-float-label  mb-4">
                                        <Label>전화번호</Label>
                                        {telstr}
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

                  {/* <NavLink to="/user/login">
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
                </NavLink> */}
              <Button
                outline
                color="primary"
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
                <span className="label">회원가입</span>
              </Button>
              </div>
            </Form>
            )}
            </Formik>
            <ColorSwitcher2 />
          </div>
        </Card>
      </Colxx>
    </Row>
            </div>
        </AppLayout2>
    );
};

export default Account;
