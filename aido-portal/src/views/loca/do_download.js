import React, { useEffect, useState } from 'react';
import { Row, Card,CardBody,CardTitle,
  Progress,Button
} from 'reactstrap';
import { Colxx
} from 'components/common/CustomBootstrap';
import StateButton from 'components/StateButton';
import profileStatuses from 'data/profileStatusesDODownload';

const DO_DOWNLOAD = () => {

  // const [high,setHigh] = useState();
  // const [middle,setMiddle] = useState();
  // const [low,setLow] = useState();
  const [highstulist,setHighstulist] = useState();
  const [middlestulist,setMiddlestulist] = useState();
  const [lowstulist,setLowstulist] = useState();
  // const [profileStatuses,setProfileStatuses] = useState();
  // const [carddata,setCarddata] = useState();
  const [sep='high',setSep] =useState(); 
  useEffect(() => {
    let url = process.env.REACT_APP_DB_HOST
    url +='/do/download'
  fetch(url,{
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    body:JSON.stringify({})
    }).then(function(result){
      return result.json(); 
    }).then(function(rslt){
      // const temp1 = 
      // console.log(temp1)
      const [hs,ms,ls] = rslt.list.result 
      let temp2 = hs
      let temp3 = String(temp2.STU_LST)
      let temp4 = temp3.substring(1,temp3.length-1)
      temp4 = temp4.replace(/["]/g,'').replace(/["["]/g,'')
      let temp5 = temp4.split(',')
      setHighstulist(temp5)

      temp2 = ms
      temp3 = String(temp2.STU_LST)
      temp4 = temp3.substring(1,temp3.length-1)
      temp4 = temp4.replace(/["]/g,'').replace(/["["]/g,'')
      temp5 = temp4.split(',')
      setMiddlestulist(temp5)

      temp2 = ls
      temp3 = String(temp2.STU_LST)
      temp4 = temp3.substring(1,temp3.length-1)
      temp4 = temp4.replace(/["]/g,'').replace(/["["]/g,'')
      temp5 = temp4.split(',')
      setLowstulist(temp5)

      // console.log(high,middle,low,stulist,temp5)
    })
  },[])
 let stlist;
 if(!highstulist || !middlestulist || !lowstulist){
  stlist = [];
 }else if(sep === 'high'){
  stlist = highstulist
 }else if(sep === 'middle'){
  stlist = middlestulist
 }else{
  stlist = lowstulist
 }
 
  const handleSuccessButtonClick = () => {
    return new Promise((success) => {
      setTimeout(() => {
        success('Everything went right!');
      }, 2000);
    });
  };

  const chgsep = (event,data) => { 
    event.preventDefault();
    event.stopPropagation();
    // console.log('data : ',data)
    setSep(data)
  }
  
  const gostudent = (event,student) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(student)
    let url = 'student/'
    url+=student
    window.location.href=url
  }

  return (
<div>
      <Row>
      <Colxx md="12" className="mb-4">
          <Card>
          <CardBody>
              <CardTitle style={{
                  "fontWeight":"bold"
                }}>
                위험군 정의
              </CardTitle>
                <p style={{
                  "fontSize":"1.25em"
                }}>
                  위험군이란?
                </p>
                <p>
                  위험군은 모델 예측결과 이탈할 가능성이 높은 순서로 모집단을 구성합니다.
                  이탈가능성은 85%, 75%, 65% 로 나뉘며, 각각 고위험군, 중위험군, 저위험군으로 나뉘게 됩니다.
                </p>
              </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Row>
        <Colxx md="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                  위험군별 학생 리스트
                </CardTitle>
                <div style={{
                    "float":"left"
                  }}>
                    <Button color="secondary" className="mb-2" onClick={(event) => { return chgsep(event, 'high');}}>
                      고위험군
                    </Button>{' '}
                    <Button color="secondary" className="mb-2" onClick={(event) => { return chgsep(event, 'middle');}}>
                      중위험군
                    </Button>{' '}
                    <Button color="secondary" className="mb-2"  onClick={(event) => { return chgsep(event, 'low');}}>
                      저위험군
                    </Button>{' '}
                </div>
                <div style={{
                    "float":"right"
                  }}>
                <StateButton
                  id="successButton"
                  color="primary"
                  className="mr-1 mb-5"
                  onClick={handleSuccessButtonClick}
                >
                  고위험군.to_xlsx
                </StateButton>
                <StateButton
                  id="successButton"
                  color="primary"
                  className="mr-1 mb-5"
                  onClick={handleSuccessButtonClick}
                >
                  중위험군.to_xlsx
                </StateButton>
                <StateButton
                  id="successButton"
                  color="primary"
                  className="mr-1 mb-5"
                  onClick={handleSuccessButtonClick}
                >
                  
                  저위험군.to_xlsx
                </StateButton>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        
        <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                  위험군별 학생 리스트
              </CardTitle>
              <table>
              {stlist && stlist.map((s) => {
                return(
                  <tr key={`stulist_${s}`} >
                    <td style={{
                      "fontSize":"x-large"
                    }}>
                      <Button outline color="primary" className="mb-2" onClick={(event) => {return gostudent(event,s);}}>
                      {s}
                      </Button>  
                      </td>
                </tr>
                )
              })}
              
              </table>
              
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <Card className="h-100">
              <CardBody>
              <CardTitle style={{
                    "fontWeight":"bold"
                  }}>
                  위험군별 평균 통계치
                </CardTitle>
                <div className="dashboard-line-chart" style={{
                  "height":"85%"
                }}>
                      {profileStatuses.map((s) => {
                    return (
                      <div key={s.title} className="mb-4">
                        <p className="mb-2">
                          {s.title}
                          <span className="float-right text-muted">
                            {s.status}/{s.total}
                          </span>
                        </p>
                        <Progress value={(s.status / s.total) * 100} />
                      </div>
                    );
                  })}
                </div>
              </CardBody>
                {/* conversionChartData */}
            </Card>
          </Colxx>
        </Row>
     
    </div>
    
  );
};

export default DO_DOWNLOAD;
