const kordata =   [
    {
        level: 1,
        nodes: [
            {
                'id': 'element',
                "nodeLabel": "초등교육과정",
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "hatbee",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "forwhale",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "gamdong",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "mindsreaddiary",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "bookreadtalk",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "predictread",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "uhweeworld",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "purplegas",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mundam",
                        "edgeWeight": 100
                    },
                ]
            }
        ]        
    },
    {
        level: 2,    
        nodes: [
            {
                'id': 'hatbee',    
                "nodeLabel": "햇비",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "rabbitturtle",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'forwhale',    
                "nodeLabel": "고래를 위하여",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "rabbitturtle",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'gamdong',    
                "nodeLabel": "감동과 즐거움을 주는 글쓰기",   
                "color": 'red',           // will be used in the edges gradient color 
                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                "edges": [
                    {
                        "nodeId": "tongillwrite",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "matrialexpression",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mindsreaddiary',    
                "nodeLabel": "마음이의 독서 일기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "clearsky",
                        "edgeWeight": 50
                    }
                    , {
                        "nodeId": "antarticar",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'bookreadtalk',    
                "nodeLabel": "책 읽고 대화하기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "towee",
                        "edgeWeight": 100
                    }, 
                ],
            },
            {
                'id': 'predictread', 
                "nodeLabel": "예측하며 읽기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "clearsky",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "antarticar",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'uhweeworld', 
                "nodeLabel": "어휘의 세계",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "salmon",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "wordgalrea",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'purplegas', 
                "nodeLabel": "보라 방구 조수택",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "rabbitturtle",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mundam', 
                "nodeLabel": "면담하기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "towee",
                        "edgeWeight": 100
                    }
                ],
            },
        ]
    },
    {
        level: 3,
        nodes: [

            
            {
                'id': 'rabbitturtle',
                "nodeLabel": "토끼와 자라",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "urfoolish",
                        "edgeWeight": 75
                    },
                    {
                        "nodeId": "motherlanguage",
                        "edgeWeight": 75
                    },
                    {
                        "nodeId": "gwitoorami",
                        "edgeWeight": 75
                    },
                    {
                        "nodeId": "dongpalk",
                        "edgeWeight": 75
                    },
                ],
            },
            {
                'id': 'tongillwrite',
                "nodeLabel": "통일성 있는 글쓰기",
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "minjeareaddiary",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'matrialexpression',
                "nodeLabel": "매체로 표현하기",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "minjeareaddiary",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'clearsky',
                "nodeLabel": "하늘은 맑건만",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "scientistlibrary",
                        "edgeWeight": 100
                    },
                ],
            },
            
           
            {
                'id': 'antarticar',
                "nodeLabel": "남극과 북극",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "scientistlibrary",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'towee',
                "nodeLabel": "토의하기",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "fread",
                        "edgeWeight": 100
                    },{
                        "nodeId": "impact",
                        "edgeWeight": 100
                    }
                ],
            },
             {
                'id': 'salmon',
                "nodeLabel": "언어의 본질",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "koreanattribute",
                        "edgeWeight": 50
                    }
                ],
            }, 
            {
                'id': 'wordgalrea',
                "nodeLabel": "단어의 갈래",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "koreanattribute",
                        "edgeWeight": 50
                    }
                ],
            },
        ]
    },
    {
        level: 4,
        nodes: [
            {
                'id': 'urfoolish',
                "nodeLabel": "넌 바보다",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "readtogether",
                        "edgeWeight": 38
                    },
                    {
                        "nodeId": "rebuildbook",
                        "edgeWeight": 37
                    }
                ],
            },
           
            {
                'id': 'motherlanguage',
                "nodeLabel": "나의 모국어는 침묵",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "readtogether",
                        "edgeWeight": 38
                    },
                    {
                        "nodeId": "rebuildbook",
                        "edgeWeight": 37
                    }
                ],
            },
            {
                'id': 'dongpalk',
                "nodeLabel": "동백꽃",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "readtogether",
                        "edgeWeight": 38
                    },
                    {
                        "nodeId": "rebuildbook",
                        "edgeWeight": 37
                    }
                ],
            },
            {
                'id': 'gwitoorami',
                "nodeLabel": "귀뚜라미",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "readtogether",
                        "edgeWeight": 38
                    },
                    {
                        "nodeId": "rebuildbook",
                        "edgeWeight": 37
                    }
                ],
            },
            {
                'id': 'minjeareaddiary',
                "nodeLabel": "민재의 독서 일기",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "explainwrite",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'scientistlibrary',
                "nodeLabel": "과학자의 서재",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "howtoexplain",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "matrialread",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'fread',
                "nodeLabel": "공감하며 대화하기",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "meaningfultalk",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'impact',
                "nodeLabel": "핵심이 드러나는 발표",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "meaningfultalk",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'koreanattribute',
                "nodeLabel": "한글의 창제 원리와 특성",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "talkattribute",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "rightpronounciation",
                        "edgeWeight": 50
                    }
                ],
            }
            
        ]
    },
    {
        level: 5,
        nodes: [
            {
                'id': 'readtogether',
                "nodeLabel": "함께 읽고 감상하기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 150
                   }
               ],
            },
            {
                'id': 'rebuildbook',
                "nodeLabel": "한 권 읽고 재구성 하기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 150
                   }
               ],
            },
            {
                'id': 'explainwrite',
                "nodeLabel": "설명하는 글쓰기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 100
                   }
               ],
            },
            {
                'id': 'howtoexplain',
                "nodeLabel": "설명 방법 파악하며 읽기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 100
                   }
               ],
            },
            {
                'id': 'matrialread',
                "nodeLabel": "매체 바르게 읽기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 100
                   }
               ],
            },
            {
                'id': 'meaningfultalk',
                "nodeLabel": "의미를 나누는 대화",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 100
                   }
               ],
            },
            {
                'id': 'talkattribute',
                "nodeLabel": "담화의 개념과 특성",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 50
                   }
               ], 
            },
            {
                'id': 'rightpronounciation',
                "nodeLabel": "올바른 발음과 표기",
                "color": 'blue',
                "edges": [
                    {
                       "nodeId": "highschool",
                       "edgeWeight": 50
                   }
               ],
            },
        ]
    },
    {
        level: 6,
        nodes: [
            {
                'id': 'highschool',
                "nodeLabel": "고교교육과정",
                "color": 'orange',
                "edges": [
                     
                ],
            },
        ]
    },
]

export default kordata;
