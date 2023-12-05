const kordatah =   [
    {
        level: 1,
        nodes: [
            {
                'id': 'hkorelement',
                "nodeLabel": "초 중등교육과정",
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "hkord1e1",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e2",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e3",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e4",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e5",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e6",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e7",
                        "edgeWeight": 50
                    }, {
                        "nodeId": "hkord1e8",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord1e9",
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
                'id': 'hkord1e1',    
                "nodeLabel": "문학의 빛깔",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "hkord2e1",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e2',    
                "nodeLabel": "한국 문학의 흐름",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e1",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e3',    
                "nodeLabel": "문학의 가치",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e1",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e4',    
                "nodeLabel": "책 속에 길이 있다",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e2",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'hkord1e5',    
                "nodeLabel": "생각하고 표현하고",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e6',    
                "nodeLabel": "소통의 힘",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e5",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e7',    
                "nodeLabel": "해결해봅시다",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e4",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e8',    
                "nodeLabel": "바른 언어 생활",   
                "color": 'orange',           
                "edges": [
                    {
                        "nodeId": "hkord2e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e5",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'hkord1e9',    
                "nodeLabel": "우리말 우리글 사랑하기",   
                "color": 'orange',          
                "edges": [
                    {
                        "nodeId": "hkord2e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "hkord2e5",
                        "edgeWeight": 50
                    },
                ],
            },
        ]
    },
    {
        level: 3,
        nodes: [
            {
                'id': 'hkord2e1',    
                "nodeLabel": "문학",   
                "color": 'yellow',           
                "edges": [
                    
                ],
            },
            {
                'id': 'hkord2e2',    
                "nodeLabel": "독서",   
                "color": 'yellow',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hkord2e3',    
                "nodeLabel": "실용 국어",   
                "color": 'yellow',           
                "edges": [
                   
                ],
            },
            {
                'id': 'hkord2e4',    
                "nodeLabel": "화법과 작문",   
                "color": 'yellow',           
                "edges": [
                  
                ],
            },
            {
                'id': 'hkord2e5',    
                "nodeLabel": "언어와 매체",   
                "color": 'yellow',           
                "edges": [

                ],
            },
        ]
    },
]

export default kordatah;
