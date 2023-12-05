import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

const data = [
  { 
    title: '영어', 
    icon: '/assets/img/profiles/l-5.jpg', 
    value: 0.10 ,
    color : colors.themeColor1,
    score : 'low'
  },
  { 
    title: '수학', 
    icon: '/assets/img/dkt/v1.jpg', 
    value: 0.05,
    color : colors.themeColor2,
    score : 'high'
  },
  {
    title: '국어',
    icon: '/assets/img/dkt/v2.jpg',
    value:  0.06,
    color : colors.themeColor3,
    score : 'high'
  }, 
  {
    title: '과학',
    icon: '/assets/img/dkt/v3.jpg',
    value: 0.02,
    color : colors.themeColor4,
    score : 'high'
  },
  { 
    title: '사회',  
    icon: '/assets/img/dkt/v4.jpg', 
    value: 0.05 ,
    color : colors.themeColor5,
    score : 'low'
  },
  { 
    title: '한국사',  
    icon: '/assets/img/dkt/v5.jpg', 
    value: 0.08 ,
    color : colors.themeColor6,
    score : 'high'
  }
];
export default data;
