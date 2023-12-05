const mathdata =  [
    {
        level: 1,    
        nodes: [
            {
                'id': 'emathd1e1',    
                "nodeLabel": "100까지의 수",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e1",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e2',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e2",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e3',    
                "nodeLabel": "규칙찾기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e4",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e4',    
                "nodeLabel": "여러가지모양",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e5",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e5',    
                "nodeLabel": "비교하기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e6",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e6',    
                "nodeLabel": "시계보기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e7",
                        "edgeWeight": 100
                    },
                ],
            }
        ]
    },
    {
        level: 2,    
        nodes: [
            {
                'id': 'emathd2e1',    
                "nodeLabel": "세 자리네 자리 수",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "emathd3e1",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e2',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "emathd3e2",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'emathd2e3',    
                "nodeLabel": "곱셈구구단",   
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "emathd3e3",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'emathd2e4',    
                "nodeLabel": "규칙찾기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd2e5',    
                "nodeLabel": "여러가지도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd3e5",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e6',    
                "nodeLabel": "길이재기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e6",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd5e7",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd2e7',    
                "nodeLabel": "시각과 시간",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e6",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e8',    
                "nodeLabel": "표와 그래프",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e8",
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
                'id': 'emathd3e2',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'orange',         
                "edges": [
                ],
            },
            {
                'id': 'emathd3e1',    
                "nodeLabel": "분수와소수",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "emathd4e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd4e2",
                        "edgeWeight": 50
                    }
                ],
            },
           
            {
                'id': 'emathd3e4',    
                "nodeLabel": "자료의 정리",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e5",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd3e3',    
                "nodeLabel": "곱셈과 나눗셈",   
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "emathd4e2",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'emathd3e8',    
                "nodeLabel": "자료의 정리",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd4e7",
                        "edgeWeight": 50
                    }
                ],
            },  
            {
                'id': 'emathd3e7',    
                "nodeLabel": "들이와 무게",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                ],
            },
            
            {
                'id': 'emathd3e5',    
                "nodeLabel": "평면도형과 원",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd4e4",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd3e6',    
                "nodeLabel": "길이와 시간",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                ],
            },
            
            
        ]
    },
    {
        level: 4,
        nodes: [
            {
                'id': 'emathd4e1',    
                "nodeLabel": "큰수",   
                "color": 'yellow',           
                "edges": [
                ],
            },
            {
                'id': 'emathd4e2',    
                "nodeLabel": "곱셈과 나눗셈",   
                "color": 'yellow',         
                "edges": [
                    {
                        "nodeId": "emathd5e1",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "emathd5e2",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'emathd4e3',    
                "nodeLabel": "분수와 소수의 덧셈과 뺄셈",   
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "emathd5e3",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "emathd5e4",
                        "edgeWeight": 100
                    },                    
                   
                ],
            },
            {
                'id': 'emathd4e4',    
                "nodeLabel": "각도(삼각형)",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    
                ],
            },
            {
                'id': 'emathd4e5',    
                "nodeLabel": "사각형과 다각형",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd5e6",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd4e6',    
                "nodeLabel": "각도",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e8",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd4e7',    
                "nodeLabel": "막대그래프와 꺽은선그래프",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e9",
                        "edgeWeight": 50
                    }
                ],
            }, 
        ]
    },
    {
        level: 5,
        nodes: [
            {
                'id': 'emathd5e1',    
                "nodeLabel": "자연수의 혼합계산",   
                "color": 'green',           
                "edges": [
                   
                ],
            },
            {
                'id': 'emathd5e2',    
                "nodeLabel": "약수와 배수 및 약분과 통분",   
                "color": 'green',         
                "edges": [
                   
                ],
            },
            {
                'id': 'emathd5e3',    
                "nodeLabel": "분수의 덧셈과 뺄셈",   
                "color": 'green',
                "edges": [
                   
                   
                ],
            },
            {
                'id': 'emathd5e4',    
                "nodeLabel": "분수와 소수의 곱셈",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e1",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd5e5',    
                "nodeLabel": "규칙과 대응",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [                   
                    
                ],
            },
            {
                'id': 'emathd5e6',    
                "nodeLabel": "합동과 대칭 및 직육면체 ",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd6e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd5e7',    
                "nodeLabel": "어림하기",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                   
                ],
            }, 
            {
                'id': 'emathd5e8',    
                "nodeLabel": "다각형의 넓이",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e5",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd6e6",
                        "edgeWeight": 50
                    }
                ],
            }, 
            {
                'id': 'emathd5e9',    
                "nodeLabel": "평균과가능성",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e7",
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
                'id': 'emathd6e1',    
                "nodeLabel": "분수와소수의나눗셈",   
                "color": 'blue',           
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e2',    
                "nodeLabel": "비례식과 비례 배분",   
                "color": 'blue',         
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e3',    
                "nodeLabel": "각기둥,각뿔과 쌓기나무",   
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    },
                   
                ],
            },
            {
                'id': 'emathd6e4',    
                "nodeLabel": "원기둥, 원뿔, 구",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd6e5',    
                "nodeLabel": "원의 넓이",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e6',    
                "nodeLabel": "직육면체의 겉넓이와 부피",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    },
                    
                ],
            },
            {
                'id': 'emathd6e7',    
                "nodeLabel": "가능성과 그래프",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathmiddle",
                        "edgeWeight": 50
                    }
                ],
            }, 
        ]
    },
    {
        level: 7,
        nodes: [
            {
                'id': 'emathmiddle',
                "nodeLabel": "중 고등교육과정",
                "color": 'blue',
                "edges": [
                    
                ],
            },
        ]
    },
]
export default mathdata;
