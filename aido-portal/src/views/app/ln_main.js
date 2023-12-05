
import React ,{useEffect,useState}from 'react';
import { Row, Card, CardBody, CardTitle, Button, Progress} from 'reactstrap';

import './ln_main.css'
import {
  Doughnutlnmain,
  RadarChart,
  LineLang,
} from 'components/charts';

import ThumbnailImage from 'components/cards/ThumblnMain';

import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

let lsobj = localStorage.getItem('gogo_current_user');
lsobj = JSON.parse(lsobj)
lsobj = lsobj.currentUser.id

const ur = lsobj.replace('\'','')
let myBubbleChart = 1;
myBubbleChart=2;
let ur2 = 0
ur2 = 1
let url2 =0
url2=1
let formData2 = 0
formData2 = 1
console.log(myBubbleChart,ur2,formData2,url2)
const LNMain = () => {
  const [userinfo,setUserinfo] = useState();
  const [sccomp,setSccomp] = useState();
  const [strenth,setStrenth] = useState();
  const [scrte,setScrte] = useState();
  const [spch,setSpch] = useState();
  const [scchg,setScchg] = useState();  
  // const [userinfotoplabel,setUserinfotoplabel] = useState();
  const [sccomptoplabel,setSccomptoplabel] = useState();
  const [strenthtoplabel,setStrenthtoplabel] = useState();
  const [scrtetoplabel,setScrtetoplabel] = useState();
  const [spchtoplabel,setSpchtoplabel] = useState();
  const [scchgtoplabel,setScchgtoplabel] = useState();  
  const [bubletoplabel,setBubletoplabel] = useState();  
  
  const formData = new FormData()
  formData.append('ur', ur)
  
  useEffect(() => {
    let url = process.env.REACT_APP_DB_HOST
    url +='/ln/main'
  fetch(url,{
    method : "POST",
    body : formData
    }).then(function(result){
      return result.json(); 
    }).then(function(rslt){
      
      const temp1 = rslt.list.result
      console.log('temp1 : ',temp1)
      let temp2 = temp1.USER_INFO
      
      temp2 = JSON.parse(temp2)
      // let toplabel = temp2.toplabel
      // setUserinfotoplabel(toplabel)
      const userinfoarr = temp2.chartdata[0]
      setUserinfo(userinfoarr)
   
      temp2 = temp1.STRENGTH
      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)
      
      temp2 = JSON.parse(temp2)
      let toplabelstr = temp2.toplabel
      setStrenthtoplabel(toplabelstr)
      const radarchrt = temp2.chartdata
      
      setStrenth(radarchrt);

      temp2 = temp1.SC_COMP
      temp2 = JSON.parse(temp2)
      toplabelstr = temp2.toplabel
      setSccomptoplabel(toplabelstr)
      const scorecomp = temp2.chartdata
      setSccomp(scorecomp);

         
      temp2 = temp1.SC_RATE
      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)
      temp2 = JSON.parse(temp2)
      toplabelstr = temp2.toplabel
      setScrtetoplabel(toplabelstr)
      const scrates = temp2.chartdata
      // console.log('radat : ',scrates)
      setScrte(scrates);
      
      temp2 = temp1.SPCH_ANALY
      console.log('temp2 : ',temp2)
      temp2 = JSON.parse(temp2)
      toplabelstr = temp2.toplabel
      setSpchtoplabel(toplabelstr)
      const spchanal = temp2.chartdata
      setSpch(spchanal);

      temp2 = temp1.SC_CHANGE
      temp2 = temp2.replace(/colors.foregroundColor/g, colors.foregroundColor)
      temp2 = temp2.replace(/colors.themeColor1_10/g, colors.themeColor1_10)
      temp2 = temp2.replace(/colors.themeColor2_10/g, colors.themeColor2_10)
      temp2 = temp2.replace(/colors.themeColor3_10/g, colors.themeColor3_10)
      temp2 = temp2.replace(/colors.themeColor4_10/g, colors.themeColor4_10)
      temp2 = temp2.replace(/colors.themeColor5_10/g, colors.themeColor5_10)
      temp2 = temp2.replace(/colors.themeColor6_10/g, colors.themeColor6_10)
      temp2 = temp2.replace(/colors.themeColor7_10/g, colors.themeColor2_10)
      
      temp2 = temp2.replace(/colors.themeColor1/g, colors.themeColor1)
      temp2 = temp2.replace(/colors.themeColor2/g, colors.themeColor2)
      temp2 = temp2.replace(/colors.themeColor3/g, colors.themeColor3)
      temp2 = temp2.replace(/colors.themeColor4/g, colors.themeColor4)
      temp2 = temp2.replace(/colors.themeColor5/g, colors.themeColor5)
      temp2 = temp2.replace(/colors.themeColor6/g, colors.themeColor6)
      temp2 = temp2.replace(/colors.themeColor7/g, colors.themeColor2)
      temp2 = JSON.parse(temp2)
      toplabelstr = temp2.toplabel
      setScchgtoplabel(toplabelstr)
      const scorechg = temp2.chartdata
      // console.log(scorechg)
      setScchg(scorechg);
      
      temp2 = temp1.POS_ANALY
      temp2 = JSON.parse(temp2)
      const bble = temp2.toplabel
      setBubletoplabel(bble);

      return temp1

    })
  },[])

  let infostr = <Card className="mb-4" >ace</Card>
  let statusstr =  <Card className="mb-4" ><CardBody><CardTitle> 성적 비교 </CardTitle></CardBody></Card>
  let radarstr = <Card className="mb-4"> <CardBody><CardTitle> 영역별 강세 </CardTitle></CardBody></Card>
  let doughnutstr = <Card className="mb-4"><CardBody><CardTitle> 점수 비율 </CardTitle></CardBody></Card>
  let spchstr =  <Card className="mb-4" style= {{" flexGrow": "3"}}><CardBody><CardTitle > 발음 분석(최신순) </CardTitle></CardBody></Card>
  let scchgstr = <Card className="mb-4"><CardBody><CardTitle> 점수 변화 </CardTitle></CardBody></Card>
  let bublestr =<CardTitle> 단어별 품사 분석 </CardTitle>

  if(userinfo && sccomp && strenth && scrte && spch && scchg && sccomptoplabel && strenthtoplabel && scrtetoplabel && spchtoplabel && scchgtoplabel && bubletoplabel){
    const jsstr = JSON.stringify(userinfo.SCORECOMPARE)
    const cprearr = jsstr.split('/')
    const cprscr = cprearr[0].replace("\"","").trim()
    const cprpm = cprearr[1].replace("\"","").trim()
    
    console.log("spch : ",spch)
    infostr = <Card className="mb-4"><CardBody><div style={{'height':'24vh'}}><div style={{'float':'left'}}><ThumbnailImage rounded src="/assets/img/profiles/l-3.jpg" alt="Card image cap" style={{ 'marginTop':'0px'}} /></div><div style={{'float':'right'}}><h1 style={{"paddingTop" :"5vh","paddingRight" :"1vh","fontSize":"xxx-large"}}>{userinfo.RANK}</h1></div></div><div style={{"height":"3vh"}}><div style={{'float':'left'}}><h2>{userinfo.studentname}</h2></div><div style={{'float':'right'}}><h3>{userinfo.SCORE}점 이전대비{cprscr}{cprpm==="+"?"▲":"▼"}</h3></div></div></CardBody></Card>
    statusstr =  <Card className="mb-4" ><CardBody><CardTitle> {sccomptoplabel} </CardTitle>{sccomp && sccomp.map((s) => {return (<div key={s.title} className="mb-4"><p className="mb-2">{s.title}<span className="float-right text-muted">{s.status}/{s.total}</span></p><Progress value={(s.status / s.total) * 100} /></div>);})}</CardBody></Card>
    radarstr = <Card className="mb-4"> <CardBody><CardTitle> {strenthtoplabel}</CardTitle><div className="chart-container"><RadarChart shadow data={strenth} /></div></CardBody></Card>
    doughnutstr = <Card className="mb-4"><CardBody><CardTitle> {scrtetoplabel}</CardTitle><div className="chart-container" style={{"height":"22vh"}} ><Doughnutlnmain data={scrte} /></div></CardBody></Card>
    spchstr = <Card className="mb-4" style= {{" flexGrow": "3"}}><CardBody><CardTitle  >{spchtoplabel}</CardTitle><div align="center" style={{"paddingTop":"0.5rem"}}>{spch && spch.map((s)=> { return (<Button outline color="primary" size="xl" className="mb-3" style={{"minWidth":"18vw"}} key={s.examid}>{s.txt} <br/>총 시간: {s.totsec} <br/> 공백 시간: {s.blnksec} <br/>평가 일시 : {s.evaldt}</Button>)})}</div></CardBody></Card>
    scchgstr = <Card className="mb-4"><CardBody><CardTitle>{scchgtoplabel}</CardTitle><div className="chart-container"><LineLang shadow data={scchg} /></div></CardBody></Card>
    bublestr =<CardTitle> {bubletoplabel} </CardTitle>

    const firdiv = document.getElementById('firstdiv')
      if(firdiv.childNodes.length === 0){
        const script = document.createElement("script");
        let sourcee = 'https://portal.aido.services:8081/'
        sourcee += process.env.REACT_APP_BUBBLE_HOST
        script.src = sourcee
        script.async = false;
        script.id='bubblescript'
        firdiv.appendChild(script);
      }else{
        console.log('1 :',firdiv.childNodes.length  )
      }

  }
  
  
      

  return (
    <div>
      <Row>
      <div id="firstdiv"/>
      <div className="col-md-4" style={{ "display": "flex","flexDirection":"column"}} >
        {infostr} 
        {statusstr}
        {radarstr}
      </div>

      <div className="col-md-4" style={{ "display": "flex", "flexDirection":"column" }}>
        {doughnutstr}
        {spchstr}
      </div>

      <div className="col-md-4">
        {scchgstr}
     
      

        <Card className="mb-4" style= {{"flexGrow": "3"}}> 
            <CardBody>
            {bublestr}
            <div id = 'vis' />
            </CardBody>
        </Card>
      </div>

      </Row>

    </div>
  );
};
export default LNMain