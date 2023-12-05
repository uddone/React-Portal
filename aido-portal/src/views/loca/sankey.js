import {Sankey} from "react-sankey-chart";
import React, { useEffect, useState } from "react";

const Sankeychart = () => {

const [wid=300,setWid] = useState();
// const [heig,setHeig] =useState();

useEffect(()=> {
    const windowResize = () => {
        const widt = window.innerWidth
        if(widt <500){
            setWid(300)
        }else if(widt >500 && widt <700){
            setWid(330)
        }else if(widt >700 && widt <1000){
            setWid(550)
        }else if(widt >1000 && widt <1300){
            setWid(770)
        }else if(widt >1300 && widt <1600){
            setWid(1100)
        }else if(widt >1600 && widt <2000){
            setWid(1430)
        }else{
            setWid(1760)
        }
    }
  
    window.addEventListener(`resize`, windowResize);
   
    return () => {
       window.removeEventListener(`resize`, windowResize);
     }
  }, []);

    return (
        <div >
            <Sankey graph={
                [
                    {
                        level: 1,    /// specifies which column
                        nodes: [

                            {
                                'id': 'fg',    
                                "nodeLabel": "1학년",   
                                "color": 'red',           // will be used in the edges gradient color 
                                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                                "edges": [
                                    {
                                        "nodeId": "single",
                                        "edgeWeight": 40
                                    }
                                    , {
                                        "nodeId": "infinete",
                                        "edgeWeight": 10
                                    }
                                    , {
                                        "nodeId": "allgong",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                            {
                                'id': 'sg',    
                                "nodeLabel": "2학년",   
                                "color": 'red',           // will be used in the edges gradient color 
                                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                                "edges": [
                                    {
                                        "nodeId": "single",
                                        "edgeWeight": 40
                                    }
                                    , {
                                        "nodeId": "infinete",
                                        "edgeWeight": 10
                                    }
                                    , {
                                        "nodeId": "allgong",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                            {
                                'id': 'tg',    
                                "nodeLabel": "3학년",   
                                "color": 'red',           // will be used in the edges gradient color 
                                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                                "edges": [
                                    {
                                        "nodeId": "single",
                                        "edgeWeight": 40
                                    }
                                    , {
                                        "nodeId": "infinete",
                                        "edgeWeight": 10
                                    }
                                    , {
                                        "nodeId": "allgong",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        level: 2,
                        nodes: [

                            {
                                'id': 'single',
                                "nodeLabel": "상급반",
                                "color": 'blue',
                                "edges": [
                                    {
                                        "nodeId": "allgong1",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong2",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                            {
                                'id': 'infinete',
                                "nodeLabel": "중급반",
                                "color": 'green',
                                "edges": [
                                     {
                                        "nodeId": "allgong1",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong2",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                            {
                                'id': 'allgong',
                                "nodeLabel": "하급반",
                                "color": 'green',
                                "edges": [
                                     {
                                        "nodeId": "allgong1",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong2",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        level: 3,
                        nodes: [

                            {
                                'id': 'allgong1',
                                "nodeLabel": "상위권",
                                "color": 'green',
                                "edges": [
                                     {
                                        "nodeId": "allgong3",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong3",
                                        "edgeWeight": 10
                                    }
                                ],
                            },

                            {
                                'id': 'allgong2',
                                "nodeLabel": "중위권",
                                "color": 'green',
                                "edges": [
                                     {
                                        "nodeId": "allgong3",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong4",
                                        "edgeWeight": 10
                                    }
                                ],
                            },
                            {
                                'id': 'lowgrp',
                                "nodeLabel": "하위권",
                                "color": 'green',
                                "edges": [
                                     {
                                        "nodeId": "allgong3",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong4",
                                        "edgeWeight": 10
                                    }
                                ],
                            },

                        ]
                    },
                    {
                        level: 4,
                        nodes: [

                            {
                                'id': 'allgong3',
                                "nodeLabel": "90%이상",
                                "color": 'yellow',
                                "edges": [
                                    {
                                        "nodeId": "allgong5",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong6",
                                        "edgeWeight": 10
                                    }
                                ],
                            },

                            {
                                'id': 'allgong4',
                                "nodeLabel": "80%이상",
                                "color": 'yellow',
                                "edges": [
                                    {
                                        "nodeId": "allgong5",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong6",
                                        "edgeWeight": 10
                                    }
                                ],
                            },

                            {
                                'id': 'svty',
                                "nodeLabel": "70%이상",
                                "color": 'yellow',
                                "edges": [
                                    {
                                        "nodeId": "allgong5",
                                        "edgeWeight": 20
                                    },
                                    {
                                        "nodeId": "allgong6",
                                        "edgeWeight": 10
                                    }
                                ],
                            },

                        ]
                    },
                    {
                        level: 5,
                        nodes: [

                            {
                                'id': 'allgong5',
                                "nodeLabel": "유지",
                                "color": 'yellow',
                                "edges": [
                                ],
                            },

                            {
                                'id': 'allgong6',
                                "nodeLabel": "이탈",
                                "color": 'yellow',
                                "edges": [
                                ],
                            },

                        ]
                    },
                ]
                    
            } height={400} width={wid} />
        </div>
    );
}

export default Sankeychart;