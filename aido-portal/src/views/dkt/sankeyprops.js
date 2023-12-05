import {Sankey} from "react-sankey-chart";
import React, { useEffect, useState } from "react";


const Sankeychart = ({props,hei}) => {
const [wid=window.innerWidth-526,setWid] = useState();

useEffect(()=> {
    const windowResize = () => {
        const widt = window.innerWidth
        if (widt < 766){
            setWid(widt)    
        }else if (widt < 1440){
            setWid(widt-366)    
        }else{
            setWid(widt-556)
        }
    }
  
    window.addEventListener(`resize`, windowResize);
   
    return () => {
       window.removeEventListener(`resize`, windowResize);
     }
  }, []);

    return (
        <div >
             <Sankey graph={props} height={hei} width={wid} />
        </div>
    );
}

export default Sankeychart;