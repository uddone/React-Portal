const mathdata =  [
    {
        level: 1,    
        nodes: [
            {
                'id': 'element_math_middle',    
                "nodeLabel": "초등교육과정",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "mmathd1e1",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e2",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e3",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e4",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e5",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e6",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e7",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e8",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "mmathd1e9",
                        "edgeWeight": 100
                    }
                    ,
                    {
                        "nodeId": "mmathd1e10",
                        "edgeWeight": 100
                    }
                    ,
                    {
                        "nodeId": "mmathd1e11",
                        "edgeWeight": 100
                    }
                    ,
                    {
                        "nodeId": "mmathd1e12",
                        "edgeWeight": 100
                    }

                ],
            }
        ]
    },
    {
        level: 1,    
        nodes: [
            {
                'id': 'mmathd1e1',    
                "nodeLabel": "소인수분해",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "mmathd3e2",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e2',    
                "nodeLabel": "정수와 유리수",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "mmathd2e1",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd1e3',    
                "nodeLabel": "문자와 식",   
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "mmathd2e2",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'mmathd1e4',    
                "nodeLabel": "일차방정식",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e4",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e5',    
                "nodeLabel": "순서쌍과 좌표, 그래프",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e5",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e6',    
                "nodeLabel": "정비례와 반비례",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e5",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e7',    
                "nodeLabel": "기본도형 및 작도와 합동",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e6",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e7",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e8',    
                "nodeLabel": "평면 도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e6",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e9',    
                "nodeLabel": "입체 도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e10', 
                "nodeLabel": "줄기와 잎그림과 도수분포표",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e11', 
                "nodeLabel": "히스토그램과 도수분포다각형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e12', 
                "nodeLabel": "상대도수",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7",
                        "edgeWeight": 50
                    }
                ],
            },
            
        ]
    },
    {
        level: 2,
        nodes: [
            {
                'id': 'mmathd2e1',
                "nodeLabel": "유리수와 순환소수",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "mmathd3e1",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mmathd2e2',
                "nodeLabel": "지수법칙 및 단항식과 다항식의 계산",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e2",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mmathd2e3',
                "nodeLabel": "연립방정식과 일차부등식",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e3",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e4',
                "nodeLabel": "함수",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e4",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e5',
                "nodeLabel": "일차함수와 그래프",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd2e6',
                "nodeLabel": "삼각형과 사각형의 성질",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e5",
                        "edgeWeight": 100
                    }
                    
                ],
            },
            {
                'id': 'mmathd2e7',
                "nodeLabel": "도형의 닮음",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e5",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e8',
                "nodeLabel": "피타고라스정리",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd2e9',
                "nodeLabel": "경우의 수와 확률",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 50
                    }
                ],
            }
            
        ]
    },
    {
        level: 3,
        nodes: [
            {
                'id': 'mmathd3e1',
                "nodeLabel": "실수와 그 계산",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },

            {
                'id': 'mmathd3e2',
                "nodeLabel": "다항식의 곱셈과 인수분해",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e3',
                "nodeLabel": "이차방정식",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e4',
                "nodeLabel": "이차함수와 그래프",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e5',
                "nodeLabel": "삼각비",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e6',
                "nodeLabel": "원의 성질",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e7',
                "nodeLabel": "대표값과 산포도 및 상관관계",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "mmathhigh",
                        "edgeWeight": 100
                    }
                ],
            }
        ]
    },
    {
        level: 4,
        nodes: [
            {
                'id': 'mmathhigh',
                "nodeLabel": "고교교육과정",
                "color": 'blue',
                "edges": [
                     
                ],
            },
        ]
    },
]
export default mathdata;
