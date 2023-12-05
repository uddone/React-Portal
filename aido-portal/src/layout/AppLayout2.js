import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from 'containers/navs/Footer';
import Topnav2 from 'containers/navs/Topnav2';
import Sidebar2 from 'containers/navs/Sidebar2';


const AppLayout2 = ({ containerClassnames, children, history }) => {
  const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  const auth = cuser.currentUser.role;
  let url = process.env.REACT_APP_DB_HOST
  const [menuItems,setMenuItems] = useState();
  useEffect(() => {
    url +='/api/menuitem'
    fetch(url,{
      method: "POST",
      headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      body:JSON.stringify({
        "UserAuth": auth,
      })
    }).then(function(result){
      return result.json(); 
    }).then(function(json){
      // const temp1 = json.list.result;
      // const temp2 = JSON.parse(temp1.JSO);
      const temp3 = json.list.result2;
      // const temp4 = JSON.parse(temp3.JSO);
      // console.log('4',temp3)
      setMenuItems(temp3) 
    })
  },[])

  let Sidbar;
  if(!menuItems){
     Sidbar = <div>loading</div>
  }else{
    Sidbar = <Sidebar2 mi={menuItems} />
  }
  
  return(
    <div id="app-container" className={containerClassnames}>
      <Topnav2 history={history} />
      {Sidbar}
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};



const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout2)
);
