import React ,{ useState}from 'react';
import { Row, 
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { Colxx} from 'components/common/CustomBootstrap';
import './upload.css';
import { alert } from 'devextreme/ui/dialog';
import { NotificationManager } from 'components/common/react-notifications';

const script = document.createElement("script");
script.src = 'https://portal.aido.services:8081/app.js'
script.async = true;
document.body.appendChild(script);

  
const Upload = () => {
  
  const [fileList,setFileList] = useState();
  const [examid=0,setExamid] = useState()
  const [fileIndex,setFileIndex] = useState();
  const [dragcolor,setDragcolor] = useState()
  const [txtt='파일 끌어다 놓기',setTxtt] = useState()

  const createNotification = (type, className) => {
    const cName = className || '';
    switch (type) {
      case 'primary':
        NotificationManager.primary(
          '업로드 중입니다.',
          '평가 완료시 까지 추가 업로드는 제한 됩니다.',
          30000,
          () => {
            console.log('notification click')
          },
          null,
          cName
        );
        break;
      case 'secondary':
        NotificationManager.secondary(
          'This is a notification!',
          'Secondary Notification',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'info':
        NotificationManager.info('Info message', '', 3000, null, null, cName);
        break;
      case 'success':
        NotificationManager.success(
          '업로드 완료',
          '화면 아래에서결과를 확인해주세요',
          5000,
          null,
          null,
          cName
        );
        break;
        case 'successedit':
        NotificationManager.success(
          '수정 알림',
          '수정이 완료되었습니다.',
          5000,
          null,
          null,
          cName
        );
        break;
        case 'eval':
        NotificationManager.primary(
          '평가 중입니다.',
          '완료시 자동으로 페이지를 이동합니다.',
          5000,
          null,
          null,
          cName
        );
        break;
      case 'warning':
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000,
          null,
          null,
          cName
        );
        break;
      case 'error':
        NotificationManager.error(
          'Error message',
          'Click me!',
          5000,
          () => {
            alert('callback');
          },
          null,
          cName
        );
        break;
      default:
        NotificationManager.info('Info message');
        break;
    }
  };




  const isAuthorized = localStorage.getItem('gogo_current_user');

  async function upldbtn(event){
    event.preventDefault();
    setTxtt('파일 끌어다 놓기')
    createNotification('primary')
    const cu = JSON.parse(isAuthorized)
    const urjson =cu.currentUser
    const ur = JSON.stringify(urjson)
    console.log('f : ',fileList)
    const formData = new FormData()
    if (fileList) {
      const drag = document.getElementById("dragButton")
      const recstart = document.getElementById("recordButton")
      const recstop = document.getElementById("stopButton")
      const recupd = document.getElementById("recupload")
      
      drag.disabled = true;recstart.disabled = true;recstop.disabled = true;recupd.disabled = true;
      formData.append('file', fileList)
      formData.append('ur', ur)
      formData.append('updrec', 'UPD')
      let url = process.env.REACT_APP_DB_HOST
      url +='/ln/upload'
      await fetch(url,{
        method: "POST",
        body:formData
      }).then(function(result){
        return result.json(); 
      }).then(function(json){
        const temp1 = json.list.result;
        console.log(temp1.stt,"\n",temp1.exam_id)
        setExamid(temp1.exam_id);
        document.getElementById("sttdata").value = temp1.stt
        createNotification('success')
        const noti = document.getElementsByClassName('notification-primary')[0]
          noti.click();
      })
    }
   setFileList(null);
  }


  function editbtn(event){
    event.preventDefault();
    const edtxt = document.getElementById("sttdata").value 
    console.log('edtxt : ',edtxt);
    const formData = new FormData()
    formData.append('examid', examid)
    formData.append('edtxt', edtxt)
    let url = process.env.REACT_APP_DB_HOST
    url +='/ln/edit'
    fetch(url,{ 
      method: "POST",
      body:formData
    }).then(function(result){
      return result.json(); 
    }).then(function(json){
      const temp1 = json.list.result;
      console.log('temp1 : ',temp1,'\n',temp1.msg)
      if(temp1.status === 'success'){
        createNotification('successedit')
      }
    })
  }
  function evalbtn(event){
    event.preventDefault();
    createNotification('eval')
    const formData = new FormData()
    formData.append('examid', examid)
    let url = process.env.REACT_APP_DB_HOST
    url +='/ln/eval'
    fetch(url,{ 
      method: "POST",
      body:formData
    }).then(function(result){
      return result.json(); 
    }).then(function(json){
      const temp1 = json.list.result;
      if(temp1.status === 'success'){
        window.location.href='/ln/main'
      }
    })
  }
  
  async function conss(event){
    event.preventDefault();
    const tt = document.getElementById("recaudio").src
    createNotification('primary')
    await fetch(tt).then(function(result){
      return result.blob(); 
    }).then(function(blob){
      const parent = document.getElementById("recordingsList");
      if(parent.childNodes.length !== 0){
        const child1 = document.getElementById("recaudio");
        const child2 = document.getElementById("reclink");
          parent.removeChild(child1);
          parent.removeChild(child2);
      }
      const noww = new Date()
      let filena = 'recodingfile_'
      filena += noww.getTime()
      filena += '.wav' 
      const audfile = new File([blob],filena,{type:blob.type})
      
      const cu = JSON.parse(isAuthorized)
      const urjson =cu.currentUser
      const ur = JSON.stringify(urjson)
    
      const formData = new FormData()
      if (audfile) {
        formData.append('file', audfile)
        formData.append('ur', ur)
        formData.append('updrec', 'REC')
        
        const drag = document.getElementById("dragButton")
        const recstart = document.getElementById("recordButton")
        const recstop = document.getElementById("stopButton")
        const recupd = document.getElementById("recupload")
        
        drag.disabled = true;
        recstart.disabled = true;
        recstop.disabled = true;
        recupd.disabled = true;


        let url = process.env.REACT_APP_DB_HOST
        url +='/ln/upload'
        fetch(url,{
          method: "POST",
          body:formData
        }).then(function(result){
          return result.json(); 
        }).then(function(json){
          const temp1 = json.list.result;
          console.log(temp1.stt,temp1.exam_id)
          setExamid(temp1.exam_id);
          document.getElementById("sttdata").value = temp1.stt
          createNotification('success')
          const noti = document.getElementsByClassName('notification-primary')[0]
          noti.click();
          setTxtt('파일 끌어다 놓기')
        })
      }
    })
  }

  
  // 파일 사이즈 리스트
  const fileSizeList = []
  
// 업로드 파일 목록 생성
const addFileList = () => {}

const selectFile = (fileObject) =>{
    
    let tempfile;
    
    if (fileObject != null) {

      // 파일 Drag 이용하여 등록시
      tempfile = fileObject;
    } 
  
    // 다중파일 등록
    if (tempfile != null) {
      
         // 파일 이름
        const fileName = tempfile.name;
        const fileNameArr = fileName.split(".");
        
         // 확장자
        const ext = fileNameArr[fileNameArr.length - 1];
        const fileSize = tempfile.size; 
        if (fileSize <= 0) {
          return;
        }
         
        const fileSizeKb = fileSize / 1024; // 파일 사이즈(단위 :kb)
        const fileSizeMb = fileSizeKb / 1024; // 파일 사이즈(단위 :Mb)
         
        let fileSizeStr = "";
        if (fileSize >= (1024*1024) ) {   // 파일 용량이 1메가 이상인 경우 
          fileSizeStr = fileSizeMb.toFixed(2);
          fileSizeStr += " Mb";
        } else if (fileSize >= 1024 ) {
          fileSizeStr = parseInt(fileSizeKb,10);
          fileSizeStr +=" kb";
        } else {
          fileSizeStr = parseInt(fileSize,10);
          fileSizeStr += " kb"
        }
        const extlist = ["wav","mp3"];
        let extmatch = false;
        for(let idx = 0 ; idx<extlist.length;idx+1){
          if(ext === extlist[idx]){
            extmatch = true;
            break;
          }
        }


        if (!extmatch) {
          let msg1;
          msg1 ="등록이 불가능한 파일 입니다.(";
          msg1+=fileName
          msg1+=")"
          alert(msg1);
        } else {
          
          // 파일 사이즈 배열에 넣기
          fileSizeList[fileIndex] = fileSizeMb;
  
          // 업로드 파일 목록 생성
          addFileList(fileIndex, fileName, fileSizeStr);
  
          setFileList(tempfile);

          // 파일 번호 증가
          setFileIndex(fileIndex+1)
          setTxtt(fileName)
        }
    } else {
      alert("ERROR");
    }
    
  }

  const dragFunction = (event, type) => {
    
    event.preventDefault();
    event.stopPropagation();
    
    if(type === 'drop'){
      if(event.dataTransfer.files.length >1){
        alert ("파일은 한개씩 업로드 해주세요 ");
      }else{
        const files = event.dataTransfer.files[0]
        if (files != null) {
          if (files.length < 1) {
             alert("폴더 업로드 불가"); 
          }else{
            selectFile(files)
          }
        } else {
          alert("ERROR");
        }
      }
    }
    if(type === 'over'){
      setDragcolor('gray')
    }else{
      setDragcolor('white')
    }
  }

  return (
    <div>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <Card className="h-100">
            <CardBody
              onDragOver={(event) => { return dragFunction(event, 'over'); }}  
              onDrop={(event) => dragFunction(event, 'drop')}
              onDragEnter={(event) => dragFunction(event, 'enter')}
              onDragLeave={(event) => dragFunction(event, 'leave')}
              
            >
              <CardTitle>.mp3 파일 업로드</CardTitle>
              <div className='dragAndDrop' 
              style={{
                "height" : "18vh",
                "marginBottom":"2vh",
                "backgroundColor":dragcolor
              }}
              
              >
              <div style={{"textAlign":"center", "height" : "13vh"}}>
                <img src="/assets/img/image_folder/mp3.png" alt=".mp3 파일 업로드" 
                style={{
                  "marginTop":"2vh",
                  "width":"10vh",
                  "marginBottom":"2vh"
                }}
                />
              </div>  
              <CardText style={{
                  "textAlign":"center"
                }} >{txtt}
              </CardText>
              </div>
              <Button color="primary" 
                className="mb-2" 
                style={{
                  "float":"right"
                  }}
                onClick={(event)=>upldbtn(event,1)}
                id="dragButton"
              > 업로드
              </Button>{' '}
            </CardBody>
          </Card>
        </Colxx>

        <Colxx sm="12" md="6" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <CardTitle>음성녹음</CardTitle>
              <div  
                style={{
                  "textAlign":"center",
                  "height":"20vh",
                }}>
                <Button 
                  outline
                  color="primary" 
                  id="recordButton" 
                  style={{
                    "marginTop":"3vh"
                  }}
                >
                  <div className='glyph-icon simple-icon-microphone' 
                    style={{
                      "fontSize":"5vw"
                    }}
                  />
                </Button>
              </div>
              
              <Button  
                color="primary" 
                className="mb-2" 
                style={{
                  "float":"left"
                }}
                id="stopButton"
              >
                ■
              </Button>{' '}
              

              <div id="recordingsList"/>{' '}
              <Button  
                color="primary" 
                className="mb-2" 
                id="recupload"
                style={{
                "float":"right"
                }}
                onClick={(event)=>conss(event)}
              >업로드</Button>
            </CardBody>
          </Card>
        </Colxx>
      </Row>      
      <Row className="mb-4">
        <Colxx xl="12" lg="12" md="12">
          <Card className="h-100"> 
            <CardBody>
              <CardTitle>결과 TEXT</CardTitle>
              <div 
                style={{
                "height":"20vh"
                }}
              >
                <textarea
                  style={{
                    "width":"100%",
                    "height":"90%",
                    "border":"none"
                  }}
                  id = "sttdata"
                />
              </div>

              <div style={{
                "float":"right"
              }}>
                <Button 
                  outline 
                  color="primary" 
                  className="mb-2"
                  onClick={(event)=>editbtn(event)}
                >수정</Button>{' '}
                <Button 
                  outline 
                  color="primary" 
                  className="mb-2"
                  onClick={(event)=>evalbtn(event)}
                >평가</Button>{' '}
              </div>  
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};

export default Upload;
