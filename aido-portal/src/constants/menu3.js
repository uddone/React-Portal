const Test = () =>{
  const cuser = JSON.parse(localStorage.getItem('gogo_current_user'));
  const auth = cuser.currentUser.role;
  let dbmenu;
  let url = process.env.REACT_APP_DB_HOST
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
    const temp1 = json.list.result;
    const temp2 = JSON.parse(temp1.JSO);
    dbmenu = temp2;
  })
  return dbmenu
}
const data = Test;
export default data;
