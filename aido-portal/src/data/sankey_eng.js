const engdata =  [
  {
      level: 1,    
      nodes: [
          {
              'id': 'impersonalit', 
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
              'id': 'beverb',    
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
              'id': 'auxiliaryverb',    
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
              'id': 'comparative', 
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
              'id': 'conjunction', 
              "nodeLabel": "접속사 that when before after",   
              "color": 'red',           
              "edges": [
                  {
                      "nodeId": "conjunctionIf",
                      "edgeWeight": 50
                  },
              ],
          },
          {
              'id': 'futuretencse', 
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
              'id': 'toinfinitivenoun', 
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
              'id': 'thereis',    
              "nodeLabel": "There is 구분",   
              "color": 'red',         
              "edges": [
                  {
                     "nodeId": "highschool",
                     "edgeWeight": 50
                 },
             ],
          },
          {
              'id': 'statement',    
              "nodeLabel": "명령문 감탄문",   
              "color": 'red',         
              "edges": [
                  {
                     "nodeId": "highschool",
                     "edgeWeight": 50
                 },
             ],
          },
          {
              'id': 'gerund',    
              "nodeLabel": "동명사",   
              "color": 'red',         
              "edges": [
                  {
                     "nodeId": "highschool",
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
              'id': 'confverb',
              "nodeLabel": "수여동사 지각동사",
              "color": 'yellow',
              "edges": [
                  {
                     "nodeId": "highschool",
                     "edgeWeight": 50
                 },
             ],
          },
          {
              'id': 'haveto',
              "nodeLabel": "have to",
              "color": 'yellow',
              "edges": [
                  {
                     "nodeId": "highschool",
                     "edgeWeight": 50
                 },
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
                  {
                      "nodeId": "highschool",
                      "edgeWeight": 50
                  }
              ],
          },
         
          {
              'id': 'comparison',
              "nodeLabel": "원급 비교",
              "color": 'green',
              "edges": [
                  {
                      "nodeId": "highschool",
                      "edgeWeight": 50
                  }
              ],
          },
          {
              'id': 'conjunctionAs',
              "nodeLabel": "접속사 as",
              "color": 'green',
              "edges": [
                  {
                      "nodeId": "highschool",
                      "edgeWeight": 60
                  }
              ],
          },
          {
              'id': 'relativepronounwhat',
              "nodeLabel": "관계대명사 what과 계속적 용법",
              "color": 'green',
              "edges": [
                  {
                      "nodeId": "highschool",
                      "edgeWeight": 60
                  }
              ],
          },
          {
              'id': 'pastprefect',
              "nodeLabel": "현재완료 진행형 과거완료",
              "color": 'green',
              "edges": [
                  {
                      "nodeId": "highschool",
                      "edgeWeight": 50
                  }
              ],
          },
          {
              'id': 'toinfinitiveadjective',
              "nodeLabel": "to부정사의 형용사적 용법",
              "color": 'green',
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

export default engdata;
