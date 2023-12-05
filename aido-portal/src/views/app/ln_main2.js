
import React from 'react';
import './ln_main.css'

const LNMain = () => {

const script = document.createElement("script");
script.src = 'https://portal.aido.services:8081/sankey.js'
script.async = false;
document.body.appendChild(script);

const roout = '/assets/csv/sankey.csv'

  return (
    <div>
      <div id = 'vis' name={roout}/>
    </div>
  );
};
export default LNMain