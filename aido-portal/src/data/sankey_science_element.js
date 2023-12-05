const sciencedata =[
    {
        level: 1,    
        nodes: [
            {
                'id': 'escid1e1',    
                "nodeLabel": "물질의 성질과 변화",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "escid2e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "escid2e2",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'escid1e2',    
                "nodeLabel": "혼합물과 분리",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "escid2e3",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'escid1e3',    
                "nodeLabel": "고체, 액체, 기체와 그 무게",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "escid2e3",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid1e4',    
                "nodeLabel": "물의 상태변화",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "escimiddle",
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
                'id': 'escid2e1',
                "nodeLabel": "용해와 용액",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "escimiddle",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e2',
                "nodeLabel": "지시약",
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "escimiddle",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e3',
                "nodeLabel": "공기",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "escimiddle",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'escid2e4',
                "nodeLabel": "온도, 압력과 기체의 부피",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "escimiddle",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'escid2e5',
                "nodeLabel": "연소 현상과 조건",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "escimiddle",
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
                'id': 'escimiddle',
                "nodeLabel": "중 고등 교육과정",
                "color": 'green',
                "edges": [
                    
                ],
            },
        ]
    }
]
export default sciencedata;
