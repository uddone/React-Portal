const sciencedata =[
    {
        level: 1,    
        nodes: [
            {
                'id': 'mscielement',    
                "nodeLabel": "초등 교육 과정",   
                "color": 'pink',           
                "edges": [
                    {
                        "nodeId": "mscid1e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mscid1e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mscid1e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mscid1e4",
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
                'id': 'mscid1e1',
                "nodeLabel": "입자의 운동과 기체의 압력",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid2e1",
                        "edgeWeight": 50
                    },{
                        "nodeId": "mscid2e2",
                        "edgeWeight": 50
                    },
                    
                ],
            },
            {
                'id': 'mscid1e2',
                "nodeLabel": "압력, 온도와 부피",
                "color": 'red',
                "edges": [
                    {
                        "nodeId": "mscid2e3",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid1e3',
                "nodeLabel": "3가지 상태와 입자배열",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid2e3",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'mscid1e4',
                "nodeLabel": "상태 변화와 열에너지 출입",
                "color": 'red',
                "edges": [
                     {
                        "nodeId": "mscid2e3",
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
                'id': 'mscid2e1',
                "nodeLabel": "원소, 원자, 분자, 이온",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mscid3e3",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid2e2',
                "nodeLabel": "밀도와 용해도",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e1",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid2e3',
                "nodeLabel": "녹는점, 어는점과 끓는점",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscid3e4",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mscid2e4',
                "nodeLabel": "순물질과 혼합물",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid2e5',
                "nodeLabel": "혼합물의 분리",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 50
                    },
                ],
            },
        ]
    },{
        level: 4,
        nodes: [
            {
                'id': 'mscid3e1',
                "nodeLabel": "물리 변화와 화학 변화",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid3e2',
                "nodeLabel": "화학 반응식",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'mscid3e4',
                "nodeLabel": "화학반응에서 에너지 출입",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 100
                    },
                ],
            },
            {
                'id': 'mscid3e3',
                "nodeLabel": "질량보존 법칙, 일정성분비 법칙과 기체반응 법칙",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "mscihigh",
                        "edgeWeight": 50
                    },
                ],
            },
            
        ]
    },{
        level:5,
        nodes:[
            {
                'id': 'mscihigh',
                "nodeLabel": "고등 교육 과정",
                "color": 'blue',
                "edges": [
                ],
            }
        ]
    }
]
export default sciencedata;
