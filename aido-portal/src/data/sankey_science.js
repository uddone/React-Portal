const sciencedata =[
    {
        level: 1,    
        nodes: [
            {
                'id': 'earthcrust',    
                "nodeLabel": "지권의 변화",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "solarsystem",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "seawave",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'gravity',    
                "nodeLabel": "중력과 탄성력",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "motionenergy",
                        "edgeWeight": 50
                    }
                    , {
                        "nodeId": "energyconversion",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'biodiversity',    
                "nodeLabel": "생물의 다양성",   
                "color": 'red',           // will be used in the edges gradient color 
                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                "edges": [
                    {
                        "nodeId": "plantenergy",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "animalenergy",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'gasproperty',    
                "nodeLabel": "기체의 성질",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "materialcomposition",
                        "edgeWeight": 50
                    }
                    , {
                        "nodeId": "materialfeature",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'matterchg',    
                "nodeLabel": "물질의 상태 변화",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "materialfeature",
                        "edgeWeight": 50
                    }
                    , {
                        "nodeId": "heatliving",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'lightwave', 
                "nodeLabel": "빛과 파동",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "highschool",
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
                'id': 'solarsystem',
                "nodeLabel": "태양계",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "starspace",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'seawave',
                "nodeLabel": "수권과 해수의 순환",
                "color": 'yellow',
                "edges": [
                    {
                        "nodeId": "atmosphere",
                        "edgeWeight": 50
                    },
                ],
            },
            {
                'id': 'electrocity',
                "nodeLabel": "전기와 자기",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "highschool",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'plantenergy',
                "nodeLabel": "식물과 에너지",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    },
                ],
            },
            
           
            {
                'id': 'animalenergy',
                "nodeLabel": "동물과 에너지",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'materialcomposition',
                "nodeLabel": "물질의 구성",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "chemicalrule",
                        "edgeWeight": 50
                    }
                ],
            },
             {
                'id': 'materialfeature',
                "nodeLabel": "물질의 특성",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "chemicalrule",
                        "edgeWeight": 100
                    }
                ],
            }, 
            {
                'id': 'heatliving',
                "nodeLabel": "열과 우리 생활",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "highschool",
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
                'id': 'starspace',
                "nodeLabel": "별과 우주",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    }
                ],
            },
           
            {
                'id': 'atmosphere',
                "nodeLabel": "기권과 날씨",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'motionenergy',
                "nodeLabel": "운동과 에너지",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'energyconversion',
                "nodeLabel": "에너지 전환과 보존",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "highschool",
                        "edgeWeight": 50
                    }
                ],
            },
            {
                'id': 'Stimulationreact',
                "nodeLabel": "자극과 반응",
                "color": 'green',
                "edges": [
                    {
                        "nodeId": "highschool",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'reproductionGenetics',
                "nodeLabel": "생식과 유전",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "highschool",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'chemicalrule',
                "nodeLabel": "화학 반응의 규칙과 에너지 변화",
                "color": 'green',
                "edges": [
                     {
                        "nodeId": "highschool",
                        "edgeWeight": 150
                    }
                ],
            }
            
        ]
    },
    {
        level: 4,
        nodes: [
            {
                'id': 'highschool',
                "nodeLabel": "고교교육과정",
                "color": 'blue',
                "edges": [
                     
                ],
            },
        ]
    },
]
export default sciencedata;
