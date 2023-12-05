const mathdata =  [
    {
        level: 1,    
        nodes: [
            {
                'id': 'hmathem',    
                "nodeLabel": "초 중등 교육과정",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "hmathd1e1",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e2",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e3",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e4",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e5",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e6",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hmathd1e7",
                        "edgeWeight": 100
                    },
                ],
            },
        ]
    },
    {
        level: 2,    
        nodes: [
            {
                'id': 'hmathd1e1',    
                "nodeLabel": "다항식의 연산",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "hmathd3e1",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hmathd1e2',    
                "nodeLabel": "나머지 정리와 인수분해",   
                "color": 'red',         
                "edges": [
                    
                ],
            },
            {
                'id': 'hmathd1e3',    
                "nodeLabel": "복소수와 이차방정식",   
                "color": 'red',
                "edges": [
                    
                   
                ],
            },
            {
                'id': 'hmathd1e4',    
                "nodeLabel": "여러가지 방정식과 부등식",   
                "color": 'red',
                "edges": [
                    
                ],
            },
            {
                'id': 'hmathd1e5',    
                "nodeLabel": "이차방정식과 이차함수",   
                "color": 'red',           
                "edges": [                   
                    {
                        "nodeId": "hmathd2e2",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hmathd1e6',    
                "nodeLabel": "평면좌표와 도형의이동",   
                "color": 'red',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hmathd1e7',    
                "nodeLabel": "직선의 방정식및 원의 방정식",   
                "color": 'red',          
                "edges": [
                    
                ],
            },          
        ]
    },
    {
        level: 3,
        nodes: [
            
            {
                'id': 'hmathd2e2',    
                "nodeLabel": "유리함수와 무리함수",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hmathd4e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd4e2",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hmathd4e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e2",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hmathd2e1',    
                "nodeLabel": "집합과 명제",   
                "color": 'orange',         
                "edges": [
                    {
                        "nodeId": "hmathd3e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd3e3",
                        "edgeWeight": 50
                    }
                ],
            },
           
            {
                'id': 'hmathd2e3',    
                "nodeLabel": "경우의 수",   
                "color": 'orange',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "hmathd6e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e3",
                        "edgeWeight": 50
                    },

                ],
            },
            {
                'id': 'hmathd2e4',    
                "nodeLabel": "순열과조합",   
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "hmathd6e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hmathd6e3",
                        "edgeWeight": 50
                    },
                   
                ],
            },
        ]
    },
    {
        level: 4,
        nodes: [
            {
                'id': 'hmathd3e1',    
                "nodeLabel": "지수와 로그 및 지수함수와 로그함수",   
                "color": 'yellow',           
                "edges": [
                ],
            },
            {
                'id': 'hmathd3e2',    
                "nodeLabel": "삼긱함수",   
                "color": 'yellow',         
                "edges": [
                ],
            },
            {
                'id': 'hmathd3e3',    
                "nodeLabel": "등차수열과 등비수열 및 귀납법",   
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "hmathd5e1",
                        "edgeWeight": 50
                    },                                       
                ],
            },
        ]
    },
    {
        level: 5,
        nodes: [
            {
                'id': 'hmathd4e1',    
                "nodeLabel": "함수의 극한과 연속",   
                "color": 'green',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hmathd4e2',    
                "nodeLabel": "미분계수와 도함수",   
                "color": 'green',         
                "edges": [
                    {
                        "nodeId": "hmathd5e2",
                        "edgeWeight": 50
                    }, 
                ],
            },
            {
                'id': 'hmathd4e3',    
                "nodeLabel": "부정적분과 정적분",   
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hmathd5e3",
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
                'id': 'hmathd5e1',    
                "nodeLabel": "수열의 극한과 급수",   
                "color": 'blue',           
                "edges": [
                    
                ],
            },
           
            {
                'id': 'hmathd5e3',    
                "nodeLabel": "여러 가지 적분법",   
                "color": 'blue',
                "edges": [
                                     
                ],
            },
            {
                'id': 'hmathd5e2',    
                "nodeLabel": "여러 가지 함수의 미분",   
                "color": 'blue',         
                "edges": [
                    
                ],
            },
        ]
    },
    {
        level: 7,
        nodes: [
            {
                'id': 'hmathd6e1',    
                "nodeLabel": "중복순열과 중복조합 및 이항정리",   
                "color": 'blue',
                "edges": [
                                      
                ],
            },
            {
                'id': 'hmathd6e2',    
                "nodeLabel": "조건부확률",   
                "color": 'blue',
                "edges": [
                   
                   
                ],
            },
            {
                'id': 'hmathd6e3',    
                "nodeLabel": "확률분포와통계적 추정",   
                "color": 'blue',
                "edges": [
                                       
                ],
            },
        ]
    },
]
export default mathdata;
