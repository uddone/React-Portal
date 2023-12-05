const weakmath =  [
    {
        level: 1,    
        nodes: [
            {
                'id': 'soinsoo',    
                "nodeLabel": "소인수분해",   
                "color": 'red',           
                "edges": [
                    {
                        "nodeId": "sikcalc",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'jungsoo',    
                "nodeLabel": "정수와 유리수",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "intervalsosoo",
                        "edgeWeight": 60
                    }
                    , {
                        "nodeId": "linearEquation",
                        "edgeWeight": 40
                    }
                ],
            },
            {
                'id': 'moonjawa',    
                "nodeLabel": "문자와 식",   
                "color": 'red',           // will be used in the edges gradient color 
                // 'image':'https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200',   // icon for the node
                "edges": [
                    {
                        "nodeId": "linearEquation",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'hamsoowagraph',    
                "nodeLabel": "함수와 그래프",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "linearEquation",
                        "edgeWeight": 30
                    }
                    , {
                        "nodeId": "linearFunction",
                        "edgeWeight": 70
                    }
                ],
            },
            {
                'id': 'basicFigure',    
                "nodeLabel": "기본 도형",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "linearFunction",
                        "edgeWeight": 20
                    }
                    , {
                        "nodeId": "flatFigure",
                        "edgeWeight": 80
                    }
                ],
            },
            {
                'id': 'statistics', 
                "nodeLabel": "통계",   
                "color": 'red',           // will be used in the edges gradient color 
                "edges": [
                    {
                        "nodeId": "NOcase",
                        "edgeWeight": 100
                    }
                ],
            },
        ]
    },
    {
        level: 2,
        nodes: [

            
            {
                'id': 'intervalsosoo',
                "nodeLabel": "순환소수",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "sqrtRealNum",
                        "edgeWeight": 60
                    },
                ],
            },
            {
                'id': 'sikcalc',
                "nodeLabel": "식의 계산",
                "color": 'orange',
                "edges": [
                    {
                        "nodeId": "multiFormulaCalc",
                        "edgeWeight": 40
                    },
                    {
                        "nodeId": "sqrtRealNum",
                        "edgeWeight": 30
                    },
                    {
                        "nodeId": "Probablity",
                        "edgeWeight": 30
                    }
                ],
            },
            {
                'id': 'linearFunction',
                "nodeLabel": "일차함수",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "FunctionAndGraph",
                        "edgeWeight": 90
                    }
                ],
            },
            {
                'id': 'linearEquation',
                "nodeLabel": "일차방정식",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "multiFormulaCalc",
                        "edgeWeight": 60
                    },
                    {
                        "nodeId": "quadraticEquation",
                        "edgeWeight": 110
                    }
                ],
            },
            
           
            {
                'id': 'NOcase',
                "nodeLabel": "경우의수",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "Probablity",
                        "edgeWeight": 100
                    }
                ],
            },
            {
                'id': 'flatFigure',
                "nodeLabel": "평면도형",
                "color": 'orange',
                "edges": [
                     {
                        "nodeId": "FigureResemblance",
                        "edgeWeight": 80
                    }
                ],
            },
        ]
    },
    {
        level: 3,
        nodes: [
            {
                'id': 'multiFormulaCalc',
                "nodeLabel": "다항식의 계산",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "SoowaSik",
                        "edgeWeight": 100
                    }
                ],
            },
           
            {
                'id': 'quadraticEquation',
                "nodeLabel": "이차방정식",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "allEquation",
                        "edgeWeight": 30
                    },
                    {
                        "nodeId": "SecondartFunction",
                        "edgeWeight": 60
                    },
                    {
                        "nodeId": "TriangleRate",
                        "edgeWeight": 20
                    }
                ],
            },
            {
                'id': 'sqrtRealNum',
                "nodeLabel": "제곱근과 실수",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "allEquation",
                        "edgeWeight": 45
                    },
                    {
                        "nodeId": "SecondartFunction",
                        "edgeWeight": 45
                    }
                ],
            },
            {
                'id': 'FunctionAndGraph',
                "nodeLabel": "함수와 그래프",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "SecondartFunction",
                        "edgeWeight": 90
                    }
                ],
            },
            {
                'id': 'FigureResemblance',
                "nodeLabel": "도형의 닮음",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "TriangleRate",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "CircleAttr",
                        "edgeWeight": 30
                    }
                ],
            },
            {
                'id': 'Probablity',
                "nodeLabel": "확률",
                "color": 'yellow',
                "edges": [
                     {
                        "nodeId": "CoRelation",
                        "edgeWeight": 130
                    }
                ],
            }
        ]
    },
    {
        level: 4,
        nodes: [

           

            {
                'id': 'allEquation',
                "nodeLabel": "여러가지 방정식",
                "color": 'green',
                "edges": [
                   
                ],
            },
            {
                'id': 'SoowaSik',
                "nodeLabel": "수와 식",
                "color": 'green',
                "edges": [
                    
                ],
            },

          

          

            {
                'id': 'CircleAttr',
                "nodeLabel": "원의 성질",
                "color": 'green',
                "edges": [
                   
                ],
            },
            {
                'id': 'TriangleRate',
                "nodeLabel": "삼각비",
                "color": 'green',
                "edges": [
                   
                ],
            },
            {
                'id': 'CoRelation',
                "nodeLabel": "상관관계",
                "color": 'green',
                "edges": [
                    
                ],
            },
            {
                'id': 'SecondartFunction',
                "nodeLabel": "이차함수",
                "color": 'green',
                "edges": [
                    
                ],
            },

        ]
    },
]
export default weakmath;
