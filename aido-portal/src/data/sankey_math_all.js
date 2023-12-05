const mathdata =  [
    {
        level: 1,    
        nodes: [
            {
                'id': 'emathd1e1a',    
                "nodeLabel": "100까지의 수",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e1a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e2a',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e2a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e3a',    
                "nodeLabel": "규칙찾기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e4a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e4a',    
                "nodeLabel": "여러가지모양",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e5a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e5a',    
                "nodeLabel": "비교하기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e6a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'emathd1e6a',    
                "nodeLabel": "시계보기",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "emathd2e7a",
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
                'id': 'emathd2e1a',    
                "nodeLabel": "세 자리네 자리 수",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "emathd3e1a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e2a',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "emathd3e2a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'emathd2e3a',    
                "nodeLabel": "곱셈구구단",   
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "emathd3e3a",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'emathd2e4a',    
                "nodeLabel": "규칙찾기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e4a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd2e5a',    
                "nodeLabel": "여러가지도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd3e5a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e6a',    
                "nodeLabel": "길이재기",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e6a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd5e7a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd2e7a',    
                "nodeLabel": "시각과 시간",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e6a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd2e8a',    
                "nodeLabel": "표와 그래프",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd3e8a",
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
                'id': 'emathd3e2a',    
                "nodeLabel": "덧셈과 뺄셈",   
                "color": 'orange',         
                "edges": [
                ],
            },
            {
                'id': 'emathd3e1a',    
                "nodeLabel": "분수와소수",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "emathd4e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd4e2a",
                        "edgeWeight": 50
                    }
                ],
            },
           
            {
                'id': 'emathd3e4a',    
                "nodeLabel": "자료의 정리",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e5a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd3e3a',    
                "nodeLabel": "곱셈과 나눗셈",   
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "emathd4e2a",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'emathd3e8a',    
                "nodeLabel": "자료의 정리",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd4e7a",
                        "edgeWeight": 50
                    }
                ],
            },  
            {
                'id': 'emathd3e7a',    
                "nodeLabel": "들이와 무게",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                ],
            },
            
            {
                'id': 'emathd3e5a',    
                "nodeLabel": "평면도형과 원",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd4e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd3e6a',    
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
                'id': 'emathd4e1a',    
                "nodeLabel": "큰수",   
                "color": 'yellow',           
                "edges": [
                ],
            },
            {
                'id': 'emathd4e2a',    
                "nodeLabel": "곱셈과 나눗셈",   
                "color": 'yellow',         
                "edges": [
                    {
                        "nodeId": "emathd5e1a",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "emathd5e2a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'emathd4e3a',    
                "nodeLabel": "분수와 소수의 덧셈과 뺄셈",   
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "emathd5e3a",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "emathd5e4a",
                        "edgeWeight": 100
                    },                    
                   
                ],
            },
            {
                'id': 'emathd4e4a',    
                "nodeLabel": "각도(삼각형)",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    
                ],
            },
            {
                'id': 'emathd4e5a',    
                "nodeLabel": "사각형과 다각형",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "emathd5e6a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd4e6a',    
                "nodeLabel": "각도",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e8a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd4e7a',    
                "nodeLabel": "막대그래프와 꺽은선그래프",   
                "color": 'yellow',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd5e9a",
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
                'id': 'emathd5e1a',    
                "nodeLabel": "자연수의 혼합계산",   
                "color": 'green',           
                "edges": [
                   
                ],
            },
            {
                'id': 'emathd5e2a',    
                "nodeLabel": "약수와 배수 및 약분과 통분",   
                "color": 'green',         
                "edges": [
                   
                ],
            },
            {
                'id': 'emathd5e3a',    
                "nodeLabel": "분수의 덧셈과 뺄셈",   
                "color": 'green',
                "edges": [
                   
                   
                ],
            },
            {
                'id': 'emathd5e4a',    
                "nodeLabel": "분수와 소수의 곱셈",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e1a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd5e5a',    
                "nodeLabel": "규칙과 대응",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [                   
                    
                ],
            },
            {
                'id': 'emathd5e6a',    
                "nodeLabel": "합동과 대칭 및 직육면체 ",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e3a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd6e4a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd5e7a',    
                "nodeLabel": "어림하기",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                   
                ],
            }, 
            {
                'id': 'emathd5e8a',    
                "nodeLabel": "다각형의 넓이",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e5a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "emathd6e6a",
                        "edgeWeight": 50
                    }
                ],
            }, 
            {
                'id': 'emathd5e9a',    
                "nodeLabel": "평균과가능성",   
                "color": 'green',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "emathd6e7a",
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
                'id': 'emathd6e1a',    
                "nodeLabel": "분수와소수의나눗셈",   
                "color": 'blue',           
                "edges": [
                    {
                        "nodeId": "mmathd1e1a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e2a',    
                "nodeLabel": "비례식과 비례 배분",   
                "color": 'blue',         
                "edges": [
                    {
                        "nodeId": "mmathd1e2a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e3a',    
                "nodeLabel": "각기둥,각뿔과 쌓기나무",   
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "mmathd1e3a",
                        "edgeWeight": 50
                    },
                   
                ],
            },
            {
                'id': 'emathd6e4a',    
                "nodeLabel": "원기둥, 원뿔, 구",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd1e4a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'emathd6e5a',    
                "nodeLabel": "원의 넓이",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [                   
                    {
                        "nodeId": "mmathd1e5a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'emathd6e6a',    
                "nodeLabel": "직육면체의 겉넓이와 부피",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd1e6a",
                        "edgeWeight": 50
                    },
                    
                ],
            },
            {
                'id': 'emathd6e7a',    
                "nodeLabel": "가능성과 그래프",   
                "color": 'blue',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd1e7a",
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
                'id': 'mmathd1e1a',    
                "nodeLabel": "소인수분해",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "mmathd3e2a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e2a',    
                "nodeLabel": "정수와 유리수",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "mmathd2e1a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd1e3a',    
                "nodeLabel": "문자와 식",   
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "mmathd2e2a",
                        "edgeWeight": 100
                    },
                   
                ],
            },
            {
                'id': 'mmathd1e4a',    
                "nodeLabel": "일차방정식",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e3a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e5a',    
                "nodeLabel": "순서쌍과 좌표, 그래프",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e4a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e5a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e6a',    
                "nodeLabel": "정비례와 반비례",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e4a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e5a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e7a',    
                "nodeLabel": "기본도형 및 작도와 합동",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd2e6a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mmathd2e7a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e8a',    
                "nodeLabel": "평면 도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e6a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e9a',    
                "nodeLabel": "입체 도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "hmathd1e1a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e10a', 
                "nodeLabel": "줄기와 잎그림과 도수분포표",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e11a', 
                "nodeLabel": "히스토그램과 도수분포다각형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd1e12a', 
                "nodeLabel": "상대도수",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mmathd3e7a",
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
                'id': 'mmathd2e1a',
                "nodeLabel": "유리수와 순환소수",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "mmathd3e1a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mmathd2e2a',
                "nodeLabel": "지수법칙 및 단항식과 다항식의 계산",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e2a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mmathd2e3a',
                "nodeLabel": "연립방정식과 일차부등식",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e3a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e4a',
                "nodeLabel": "함수",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e4a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e5a',
                "nodeLabel": "일차함수와 그래프",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "hmathd1e2a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd2e6a',
                "nodeLabel": "삼각형과 사각형의 성질",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e5a",
                        "edgeWeight": 100
                    }
                    
                ],
            },
            {
                'id': 'mmathd2e7a',
                "nodeLabel": "도형의 닮음",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mmathd3e5a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd2e8a',
                "nodeLabel": "피타고라스정리",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "hmathd1e3a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mmathd2e9a',
                "nodeLabel": "경우의 수와 확률",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "hmathd1e4a",
                        "edgeWeight": 50
                    }
                ],
            }
            
        ]
    },
    {
        level: 9,
        nodes: [
            {
                'id': 'mmathd3e1a',
                "nodeLabel": "실수와 그 계산",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e1a",
                        "edgeWeight": 100
                    }
                ],
            },

            {
                'id': 'mmathd3e2a',
                "nodeLabel": "다항식의 곱셈과 인수분해",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e2a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e3a',
                "nodeLabel": "이차방정식",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e3a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e4a',
                "nodeLabel": "이차함수와 그래프",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e4a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e5a',
                "nodeLabel": "삼각비",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e5a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e6a',
                "nodeLabel": "원의 성질",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e6a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'mmathd3e7a',
                "nodeLabel": "대표값과 산포도 및 상관관계",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd1e7a",
                        "edgeWeight": 100
                    }
                ],
            }
        ]
    },
    {
        level: 10,    
        nodes: [
            {
                'id': 'hmathd1e1a',    
                "nodeLabel": "다항식의 연산",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "hmathd3e1a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hmathd1e2a',    
                "nodeLabel": "나머지 정리와 인수분해",   
                "color": 'red',         
                "edges": [
                    
                ],
            },
            {
                'id': 'hmathd1e3a',    
                "nodeLabel": "복소수와 이차방정식",   
                "color": 'red',
                "edges": [
                    
                   
                ],
            },
            {
                'id': 'hmathd1e4a',    
                "nodeLabel": "여러가지 방정식과 부등식",   
                "color": 'red',
                "edges": [
                    
                ],
            },
            {
                'id': 'hmathd1e5a',    
                "nodeLabel": "이차방정식과 이차함수",   
                "color": 'red',           
                "edges": [                   
                    {
                        "nodeId": "hmathd2e2a",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'hmathd1e6a',    
                "nodeLabel": "평면좌표와 도형의이동",   
                "color": 'red',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hmathd1e7a',    
                "nodeLabel": "직선의 방정식및 원의 방정식",   
                "color": 'red',          
                "edges": [
                    
                ],
            },          
        ]
    },
    {
        level: 11,
        nodes: [
            {
                'id': 'hmathd2e2a',    
                "nodeLabel": "유리함수와 무리함수",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hmathd4e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd4e2a",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hmathd4e3a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e2a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hmathd2e1a',    
                "nodeLabel": "집합과 명제",   
                "color": 'orange',         
                "edges": [
                    {
                        "nodeId": "hmathd3e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e3a",
                        "edgeWeight": 50
                    }
                ],
            },
           
            {
                'id': 'hmathd2e3a',    
                "nodeLabel": "경우의 수",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "hmathd6e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e3a",
                        "edgeWeight": 50
                    },

                ],
            },
            {
                'id': 'hmathd2e4a',    
                "nodeLabel": "순열과조합",   
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "hmathd6e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e3a",
                        "edgeWeight": 50
                    },
                   
                ],
            },
        ]
    },
    {
        level: 12,
        nodes: [
            {
                'id': 'hmathd3e1a',    
                "nodeLabel": "지수와 로그 및 지수함수와 로그함수",   
                "color": 'yellow',           
                "edges": [
                ],
            },
            {
                'id': 'hmathd3e2a',    
                "nodeLabel": "삼긱함수",   
                "color": 'yellow',         
                "edges": [
                ],
            },
            {
                'id': 'hmathd3e3a',    
                "nodeLabel": "등차수열과 등비수열 및 귀납법",   
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "hmathd5e1a",
                        "edgeWeight": 50
                    },                                       
                ],
            },
        ]
    },
    {
        level: 13,
        nodes: [
            {
                'id': 'hmathd4e1a',    
                "nodeLabel": "함수의 극한과 연속",   
                "color": 'green',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hmathd4e2a',    
                "nodeLabel": "미분계수와 도함수",   
                "color": 'green',         
                "edges": [
                    {
                        "nodeId": "hmathd5e2a",
                        "edgeWeight": 50
                    }, 
                ],
            },
            {
                'id': 'hmathd4e3a',    
                "nodeLabel": "부정적분과 정적분",   
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd5e3a",
                        "edgeWeight": 50
                    }, 
                ],
            },
        ]
    },
    {
        level: 14,
        nodes: [
            {
                'id': 'hmathd5e1a',    
                "nodeLabel": "수열의 극한과 급수",   
                "color": 'blue',           
                "edges": [
                    
                ],
            },
           
            {
                'id': 'hmathd5e3a',    
                "nodeLabel": "여러 가지 적분법",   
                "color": 'blue',
                "edges": [
                                     
                ],
            },
            {
                'id': 'hmathd5e2a',    
                "nodeLabel": "여러 가지 함수의 미분",   
                "color": 'blue',         
                "edges": [
                    
                ],
            },
        ]
    },
    {
        level: 15,
        nodes: [
            {
                'id': 'hmathd6e1a',    
                "nodeLabel": "중복순열과 중복조합 및 이항정리",   
                "color": 'blue',
                "edges": [
                                      
                ],
            },
            {
                'id': 'hmathd6e2a',    
                "nodeLabel": "조건부확률",   
                "color": 'blue',
                "edges": [
                   
                   
                ],
            },
            {
                'id': 'hmathd6e3a',    
                "nodeLabel": "확률분포와통계적 추정",   
                "color": 'blue',
                "edges": [
                                       
                ],
            },
        ]
    },
]
export default mathdata;
