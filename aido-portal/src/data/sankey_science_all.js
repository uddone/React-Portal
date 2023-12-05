const sciencedata =[
    {
        level: 1,    
        nodes: [
            {
                'id': 'escid1e1a',    
                "nodeLabel": "물질의 성질과 변화",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "escid2e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "escid2e2a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'escid1e2a',    
                "nodeLabel": "혼합물과 분리",   
                "color": 'pink',         
                "edges": [
                    {
                        "nodeId": "escid2e3a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'escid1e3a',    
                "nodeLabel": "고체, 액체, 기체와 그 무게",   
                "color": 'pink',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "escid2e3a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid1e4a',    
                "nodeLabel": "물의 상태변화",   
                "color": 'pink',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "mscid1e4a",
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
                'id': 'escid2e1a',
                "nodeLabel": "용해와 용액",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid2e2a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e2a',
                "nodeLabel": "지시약",
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "hscid1e5a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e3a',
                "nodeLabel": "공기",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid2e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'escid2e4a',
                "nodeLabel": "온도, 압력과 기체의 부피",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid1e1a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e5a',
                "nodeLabel": "연소 현상과 조건",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid1e3a",
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
                'id': 'mscid1e1a',
                "nodeLabel": "입자의 운동과 기체의 압력",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "mscid2e1a",
                        "edgeWeight": 50
                    },{
                        "nodeId": "mscid2e2a",
                        "edgeWeight": 50
                    },
                    
                ],
            },
            {
                'id': 'mscid1e2a',
                "nodeLabel": "압력, 온도와 부피",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "mscid2e3a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid1e4a',
                "nodeLabel": "상태 변화와 열에너지 출입",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "mscid2e3a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid1e3a',
                "nodeLabel": "3가지 상태와 입자배열",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "mscid2e3a",
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
                'id': 'mscid2e1a',
                "nodeLabel": "원소, 원자, 분자, 이온",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mscid3e3a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid1e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid1e2a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid2e2a',
                "nodeLabel": "밀도와 용해도",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e1a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid2e3a',
                "nodeLabel": "녹는점, 어는점과 끓는점",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e4a",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mscid2e4a',
                "nodeLabel": "순물질과 혼합물",
                "color": 'yellow',
                "edges": [
                ],
            },
            {
                'id': 'mscid2e5a',
                "nodeLabel": "혼합물의 분리",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "hscid2e9a",
                        "edgeWeight": 50
                    },
                ],
            },
        ]
    },{
        level: 5,
        nodes: [
            {
                'id': 'mscid3e1a',
                "nodeLabel": "물리 변화와 화학 변화",
                "color": 'green',
                "edges": [
                ],
            },
            {
                'id': 'mscid3e2a',
                "nodeLabel": "화학 반응식",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid1e4a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid3e4a',
                "nodeLabel": "화학반응에서 에너지 출입",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid2e10a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid3e3a',
                "nodeLabel": "질량보존 법칙, 일정성분비 법칙과 기체반응 법칙",
                "color": 'green',
                "edges": [
                ],
            },
            
        ]
    },
    {
        level: 6,
        nodes: [
            {
                'id': 'hscid1e3a',
                "nodeLabel": "지각과 생명체 구성 물질",
                "color": 'blue',
                "edges": [
                     {
                        "nodeId": "hscid2e9a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid1e1a',
                "nodeLabel": "금속과 비금속",
                "color": 'blue',
                "edges": [
                     {
                        "nodeId": "hscid2e4a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid1e2a',
                "nodeLabel": "이온 결합과 공유 결합",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "hscid2e1a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e3a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e4a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e5a",
                        "edgeWeight": 50
                    },
                ],
            },
            
            
            {
                'id': 'hscid1e4a',
                "nodeLabel": "산화와 환원",
                "color": 'blue',
                "edges": [
                    {
                        "nodeId": "hscid2e6a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e7a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid1e5a',
                "nodeLabel": "산성과 염기성",
                "color": 'blue',
                "edges": [
                     {
                        "nodeId": "hscid2e8a",
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
                'id': 'hscid2e1a',
                "nodeLabel": "양성자, 중성자, 전자",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "hscid3e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e2a',
                "nodeLabel": "물과 화학 반응식",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "hscid3e2a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid3e3a",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid2e3a',
                "nodeLabel": "양자수",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "hscid3e8a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e4a',
                "nodeLabel": "전자배치와 주기율표",
                "color": 'purple',
                "edges": [
                ],
            },
            {
                'id': 'hscid2e5a',
                "nodeLabel": "화학 결합과 분자의 구조",
                "color": 'purple',
                "edges": [
                    {
                        "nodeId": "hscid3e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e6a',
                "nodeLabel": "산화와 환원",
                "color": 'purple',
                "edges": [
                     {
                        "nodeId": "hscid3e8a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e7a',
                "nodeLabel": "가역 반응과 동적 평형",
                "color": 'purple',
                "edges": [
                     {
                        "nodeId": "hscid3e4a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e8a',
                "nodeLabel": "중화 반응의 양적 관계",
                "color": 'purple',
                "edges": [
                     {
                        "nodeId": "hscid3e5a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e9a',
                "nodeLabel": "탄소 화합물",
                "color": 'purple',
                "edges": [
                     {
                        "nodeId": "hscid3e1a",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e10a',
                "nodeLabel": "발열 반응과 흡열 반응",
                "color": 'purple',
                "edges": [
                     {
                        "nodeId": "hscid3e6a",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid3e7a",
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
                'id': 'hscid3e1a',
                "nodeLabel": "고체의 구조",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e2a',
                "nodeLabel": "액체의 성질",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e3a',
                "nodeLabel": "이상기체 상태 방정식",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e4a',
                "nodeLabel": "화학 평형과 르샤를리에 원리",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e5a',
                "nodeLabel": "반응 속도, 반감기와 활성화 에너지",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e6a',
                "nodeLabel": "촉매, 효소",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e7a',
                "nodeLabel": "엔트로피와 열화학 반응식",
                "color": 'gray',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e8a',
                "nodeLabel": "화학 전지와 전기 분해",
                "color": 'gray',
                "edges": [
                     
                ],
            },
        ]
    },
]
export default sciencedata;
