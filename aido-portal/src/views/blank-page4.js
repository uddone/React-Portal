import React, {
  useState, 
  useEffect
} from 'react';

function Blank4 () {
  const [list,setList] = useState();
  const [ur,setUr] = useState();
  
  useEffect(() => {
    fetch(process.env.REACT_APP_DB_HOST+'/api/test')
  
    .then(function(result){      
      return result.json();
    })
    .then(function(json){
      const lst = json.list.result    
      setList(lst)
    })
    
  },[])

  
  useEffect(() => {
    fetch(process.env.REACT_APP_DB_HOST+'/api/urtest')
  
    .then(function(result){      
      return result.json();
    })
    .then(function(json){
      const usr = json.list.result    
      setUr(usr)
    })
    
  },[])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((userse) => setUsers(userse));
  // })

  return (
    <div className="App">
      <header className="App-header">
      {list && list.map((user) => (
          <li key={user.age}>{user.name}</li>
        ))}
      {ur && ur.map((usr) => (
          <li key={usr.EMAIL_ADR}>{usr.USER_AUTH}</li>
        ))}
      </header>
      <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>        
    </div>    
  )} 
export default Blank4;
