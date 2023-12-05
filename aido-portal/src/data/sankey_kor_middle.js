const kordatamiddle =   [
    {
        level: 1,
        nodes: [
            {
                'id': 'mkorelement',
                "nodeLabel": "초등교육과정",
                "color": 'pink',
                "edges": [
                    {
                        "nodeId": "hatbee",
                        "edgeWeight": 100
                    }, {
                        "nodeId": "forwhale",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "gamdong",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "mindsreaddiary",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "bookreadtalk",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "predictread",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "uhweeworld",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "purplegas",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mundam",
                        "edgeWeight": 50
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
                        "edgeWeight": 50
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
                        "edgeWeight": 50
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
                        "edgeWeight": 50
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
                        "edgeWeight": 50
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
                        "edgeWeight": 50
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
                "color": 'orange',
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
                "color": 'orange',
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
                "color": 'orange',
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
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "scientistlibrary",
                        "edgeWeight": 50
                    },
                ],
            },
            
           
            {
                'id': 'antarticar',
                "nodeLabel": "남극과 북극",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "scientistlibrary",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'towee',
                "nodeLabel": "토의하기",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "fread",
                        "edgeWeight": 50
                    },{
                        "nodeId": "impact",
                        "edgeWeight": 50
                    }
                ],
            },
             {
                'id': 'salmon',
                "nodeLabel": "언어의 본질",
                "color": 'orange',
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
                "color": 'orange',
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
                "color": 'yellow',
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
                "color": 'yellow',
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
                "color": 'yellow',
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
                "color": 'yellow',
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
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "explainwrite",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'scientistlibrary',
                "nodeLabel": "과학자의 서재",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "howtoexplain",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "matrialread",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'fread',
                "nodeLabel": "공감하며 대화하기",
                "color": 'yellow',
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
                "color": 'yellow',
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
                "color": 'yellow',
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
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e3",
                       "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e6",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'rebuildbook',
                "nodeLabel": "한 권 읽고 재구성 하기",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e3",
                       "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e6",
                        "edgeWeight": 50
                    },
               ],
            },
            {
                'id': 'explainwrite',
                "nodeLabel": "설명하는 글쓰기",
                "color": 'green',
                "edges": [
                    {
                       "nodeId": "mkord5e1",
                       "edgeWeight": 50
                   }
               ],
            },
            {
                'id': 'howtoexplain',
                "nodeLabel": "설명 방법 파악하며 읽기",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e2",
                       "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e7",
                        "edgeWeight": 50
                    },
               ],
            },
            {
                'id': 'matrialread',
                "nodeLabel": "매체 바르게 읽기",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e2",
                       "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e7",
                        "edgeWeight": 50
                    },
               ],
            },
            {
                'id': 'meaningfultalk',
                "nodeLabel": "의미를 나누는 대화",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e8",
                       "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord5e7",
                        "edgeWeight": 50
                    },
               ],
            },
            {
                'id': 'talkattribute',
                "nodeLabel": "담화의 개념과 특성",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e5",
                        "edgeWeight": 50
                    },
               ], 
            },
            {
                'id': 'rightpronounciation',
                "nodeLabel": "올바른 발음과 표기",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mkord5e5",
                        "edgeWeight": 50
                    },
               ],
            },
        ]
    },
    {
        level: 6,
        nodes: [
            {
                'id': 'mkord5e1',
                "nodeLabel": "통일을 향한 국어의 길",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mkord5e2',
                "nodeLabel": "논증방법 파악하며 읽기",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e5",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e6",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mkord5e4',
                "nodeLabel": "독서 토론하기",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e5",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e6",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mkord5e3',
                "nodeLabel": "상처가 더 꽃이다",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e7",
                        "edgeWeight": 50
                    },
                ],
            },
           
            {
                'id': 'mkord5e5',
                "nodeLabel": "국어의 음운",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e8",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mkord5e6',
                "nodeLabel": "노새 두 마리",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e7",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mkord5e7',
                "nodeLabel": "마음이와 민재의 독서대화",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e5",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mkord6e6",
                        "edgeWeight": 50
                    },
                    
                ],
            },
            {
                'id': 'mkord5e8',
                "nodeLabel": "설득전략 분석하며 듣기",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mkord6e2",
                        "edgeWeight": 50
                    },
                ],
            },
        ]
    },
    {
        level: 7,
        nodes: [
            {
                'id': 'mkord6e1',
                "nodeLabel": "허생전",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e2',
                "nodeLabel": "자신감 있게 말하기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e3',
                "nodeLabel": "보고하는 글 쓰기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e4',
                "nodeLabel": "주장하는 글 쓰기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e5',
                "nodeLabel": "능동적으로 읽기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e6',
                "nodeLabel": "비교하며 읽기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e7',
                "nodeLabel": "시집 읽고 해석하기",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mkord6e8',
                "nodeLabel": "문장의 짜임",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "mkorhigh",
                        "edgeWeight": 50
                    }
                ],
            },
        ]
    },
    {
        level: 8,
        nodes: [
            {
                'id': 'mkorhigh',
                "nodeLabel": "고교교육과정",
                "color": 'gray',
                "edges": [
                     
                ],
            },
        ]
    },
]

export default kordatamiddle;
