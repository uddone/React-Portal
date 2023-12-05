const engdata =  [
    { level: 1,    
        nodes: [
            {
                'id': 'element_eng_middle', 
                "nodeLabel": "초등교육과정",   
                "color": 'red',         
                "edges": [
                    {
                        "nodeId": "mengd1e1",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e2",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e3",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e4",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e5",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e6",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e7",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e8",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e9",
                        "edgeWeight": 50
                    },
                    {
                        "nodeId": "mengd1e10",
                        "edgeWeight": 50
                    },
                ],
            }
        ]},
  {
      level: 1,    
      nodes: [
          {
              'id': 'mengd1e1', 
              "nodeLabel": "비인칭 주어 it",   
              "color": 'red',         
              "edges": [
                  {
                      "nodeId": "participle",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'mengd1e2',    
              "nodeLabel": "be동사 일반동사 감각동사",   
              "color": 'red',           
              "edges": [
                  {
                      "nodeId": "confverb",
                      "edgeWeight": 50
                  },
              ],
          },
          
          {
              'id': 'mengd1e3',    
              "nodeLabel": "조동사 can will",   
              "color": 'red',         
              "edges": [
                  {
                      "nodeId": "haveto",
                      "edgeWeight": 50
                  },
              ],
          },
          
         
          {
              'id': 'mengd1e4', 
              "nodeLabel": "비교급 최상급",   
              "color": 'red',         
              "edges": [
                  {
                      "nodeId": "comparison",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'mengd1e5', 
              "nodeLabel": "접속사 that when before after",   
              "color": 'red',           
              "edges": [
                  {
                      "nodeId": "conjunctionIf",
                      "edgeWeight": 100
                  },
              ],
          },
          {
              'id': 'mengd1e6', 
              "nodeLabel": "미래시제",   
              "color": 'red',         
              "edges": [
                  {
                      "nodeId": "presentprefect",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'mengd1e7', 
              "nodeLabel": "to부정사의 명사적 용법",   
              "color": 'red',          
              "edges": [
                  {
                      "nodeId": "toinfinitiveadverb",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'mengd1e8',    
              "nodeLabel": "There is 구분",   
              "color": 'red',         
              "edges": [
                  
                  
             ],
          },
          {
              'id': 'mengd1e9',    
              "nodeLabel": "명령문 감탄문",   
              "color": 'red',         
              "edges": [
                 
             ],
          },
          {
              'id': 'mengd1e10',    
              "nodeLabel": "동명사",   
              "color": 'red',         
              "edges": [
                  
             ],
          },
      ]
  },
  {
      level: 2,
      nodes: [
          {
              'id': 'confverb',
              "nodeLabel": "수여동사 지각동사",
              "color": 'yellow',
              "edges": [
                 
             ],
          },
          {
              'id': 'haveto',
              "nodeLabel": "have to",
              "color": 'yellow',
              "edges": [
                  
             ],
          },
          
          {
              'id': 'relativepronoun',
              "nodeLabel": "관계대명서 주격 목적격",
              "color": 'yellow',
              "edges": [
                  {
                     "nodeId": "relativepronounwhat",
                     "edgeWeight": 50
                 },
             ],
          },
          {
              'id': 'conjunctionIf',
              "nodeLabel": "접속사 if",
              "color": 'yellow',
              "edges": [
                  {
                     "nodeId": "conjunctionAs",
                     "edgeWeight": 50
                 },
             ],
          },
          {
              'id': 'toinfinitiveadverb',
              "nodeLabel": "to부정사의 부사적 용법",
              "color": 'yellow',
              "edges": [
                   {
                      "nodeId": "toinfinitiveadjective",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'presentprefect',
              "nodeLabel": "현재완료",
              "color": 'yellow',
              "edges": [
                   {
                      "nodeId": "pastprefect",
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
              'id': 'participle',
              "nodeLabel": "분사의 분사구분",
              "color": 'green',
              "edges": [
                 
              ],
          },
         
          {
              'id': 'comparison',
              "nodeLabel": "원급 비교",
              "color": 'green',
              "edges": [
                  
              ],
          },
          {
              'id': 'conjunctionAs',
              "nodeLabel": "접속사 as",
              "color": 'green',
              "edges": [
                 
              ],
          },
          {
              'id': 'relativepronounwhat',
              "nodeLabel": "관계대명사 what과 계속적 용법",
              "color": 'green',
              "edges": [
                  
              ],
          },
          {
              'id': 'pastprefect',
              "nodeLabel": "현재완료 진행형 과거완료",
              "color": 'green',
              "edges": [
                 
              ],
          },
          {
              'id': 'toinfinitiveadjective',
              "nodeLabel": "to부정사의 형용사적 용법",
              "color": 'green',
              "edges": [
                   
              ],
          },
      ]
  },
]

export default engdata;
