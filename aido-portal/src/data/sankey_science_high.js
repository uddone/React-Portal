const sciencedata =[
    {
        level: 1,    
        nodes: [
            {
                'id': 'hscielement',    
                "nodeLabel": "초 중등 교육 과정",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "hscid1e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid1e2",
                        "edgeWeight": 100
                    },
                    {
                        "nodeId": "hscid1e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid1e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid1e5",
                        "edgeWeight": 50
                    },
                    
                ],
            },
        ]
    },
    {
        level: 2,
        nodes: [

            
            {
                'id': 'hscid1e1',
                "nodeLabel": "금속과 비금속",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "hscid2e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid1e2',
                "nodeLabel": "이온 결합과 공유 결합",
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "hscid2e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e5",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid1e3',
                "nodeLabel": "지각과 생명체 구성 물질",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "hscid2e9",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid1e4',
                "nodeLabel": "산화와 환원",
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "hscid2e6",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid2e7",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid1e5',
                "nodeLabel": "산성과 염기성",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "hscid2e8",
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
                'id': 'hscid2e1',
                "nodeLabel": "양성자, 중성자, 전자",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hscid3e4",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e2',
                "nodeLabel": "물과 화학 반응식",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hscid3e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid3e3",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hscid2e3',
                "nodeLabel": "양자수",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hscid3e8",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e4',
                "nodeLabel": "전자배치와 주기율표",
                "color": 'green',
                "edges": [
                ],
            },
            {
                'id': 'hscid2e5',
                "nodeLabel": "화학 결합과 분자의 구조",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "hscid3e4",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e6',
                "nodeLabel": "산화와 환원",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid3e8",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e7',
                "nodeLabel": "가역 반응과 동적 평형",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid3e4",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e8',
                "nodeLabel": "중화 반응의 양적 관계",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid3e5",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e9',
                "nodeLabel": "탄소 화합물",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid3e1",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'hscid2e10',
                "nodeLabel": "발열 반응과 흡열 반응",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "hscid3e6",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hscid3e7",
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
                'id': 'hscid3e1',
                "nodeLabel": "고체의 구조",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e2',
                "nodeLabel": "액체의 성질",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e3',
                "nodeLabel": "이상기체 상태 방정식",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e4',
                "nodeLabel": "화학 평형과 르샤를리에 원리",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e5',
                "nodeLabel": "반응 속도, 반감기와 활성화 에너지",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e6',
                "nodeLabel": "촉매, 효소",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e7',
                "nodeLabel": "엔트로피와 열화학 반응식",
                "color": 'blue',
                "edges": [
                     
                ],
            },
            {
                'id': 'hscid3e8',
                "nodeLabel": "화학 전지와 전기 분해",
                "color": 'blue',
                "edges": [
                     
                ],
            },
        ]
    },
    
]
export default sciencedata;
