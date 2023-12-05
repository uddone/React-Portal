import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

export const lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};

export const lineChartData360 = {
  labels: ['2','4.1','6.1','8.2','10.2','12.2','14.3','16.3','18.4','20.4','22.4','24.5','26.5','28.6','30.6','32.7','34.7','36.7','38.8','40.8','42.9','44.9','46.9','49','51','53.1','55.1','57.1','59.2','61.2','63.3','65.3','67.3','69.4','71.4','73.5','75.5','77.6','79.6','81.6','83.7','85.7','87.8','89.8','91.8','93.9','95.9','98','100'],
  datasets: [
    {
      label: '',
      data: [1.3,1.7,2.1,2.6,3.2,3.9,4.7,5.6,6.7,7.8,9,10.3,11.7,13.1,14.5,16,17.4,18.7,20,21.1,22.1,22.9,23.5,23.8,23.9,23.8,23.5,22.9,22.1,	21.1,20,	18.7	,17.4	,16	,14.5	,13.1	,11.7	,10.3	,9,	7.8	,6.7	,5.6,4.7	,3.9	,3.2	,2.6	,2.1	,1.7,1.3],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 1,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },{
      label: '',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ,0,0,0,0,0,0,18.7,17.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 0,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: true,
    }
  ],
};


export const lineChartDatadkt = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 0,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '',
      data: [51, 56, 65, 50, 63, 66, 58],
      borderColor: colors.themeColor6,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor6,
      pointHoverBackgroundColor: colors.themeColor6,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 0,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};
export const polarAreaChartData = {
  labels: ['Sales', 'Orders', 'Stock'],
  datasets: [
    {
      data: [80, 90, 70],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
    },
  ],
};

export const areaChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor1_10,
    },
  ],
};

export const scatterChartData = {
  datasets: [
    {
      borderWidth: 2,
      showLine: false,
      label: 'Cakes',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [
        { x: 62, y: -78 },
        { x: -0, y: 74 },
        { x: -67, y: 45 },
        { x: -26, y: -43 },
        { x: -15, y: -30 },
        { x: 65, y: -68 },
        { x: -28, y: -61 },
      ],
    },
    {
      borderWidth: 2,
      showLine: false,
      label: 'Desserts',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [
        { x: 79, y: 62 },
        { x: 62, y: 0 },
        { x: -76, y: -81 },
        { x: -51, y: 41 },
        { x: -9, y: 9 },
        { x: 72, y: -37 },
        { x: 62, y: -26 },
      ],
    },
  ],
};

export const barChartDatadkt = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: '평균 성적',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324, 569, 702, 600],
      borderWidth: 2,
    },
    {
      label: '김상수',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605, 400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Cakes',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324, 569, 702, 600],
      borderWidth: 2,
    },
    {
      label: 'Desserts',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605, 400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const barDataDOMain = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July'],
  datasets: [
    {
      label: '이탈자',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [89484,82615,77451,71548,64980,57421,42373],
      borderWidth: 2,
    },
    {
      label: '유지자',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [72064, 75550, 67080, 66603, 58545, 50782, 47115],
      borderWidth: 2,
    },
    {
      label: '이탈예측자',
      borderColor: colors.themeColor3,
      backgroundColor: colors.themeColor3_10,
      data: [87000, 82000, 75000, 70000, 60000, 54000, 40000],
      borderWidth: 2,
    },
  ],
};


export const radarChartDataLN = {
  datasets: [
    {
      label: '유창성',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 90, 70],
    },
    {
      label: '어휘력',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [68, 80, 95],
    },
    {
      label: '단어량',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor3,
      borderColor:  colors.themeColor3,
      backgroundColor:  colors.themeColor3_10,
      data: [78, 88, 90],
    }    
  ],
  labels: ['유창성', '어휘력', '단어량'],
};

export const radarChartData360 = {
  datasets: [
    {
      label: '평균',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 70, 60,80,87,65],
    },
    {
      label: '학생',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [55, 75, 70,70,70,80],
    }
  ],
  labels: ['창의적 사고 역량', '의사소통 역량', '자기관리 역량','공동체 역량', '심미적 감성 역량', '지식정보처리 역량'],
};

export const radarChartData360KOR = {
  datasets: [
    {
      label: '평균',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 70, 60,80,87,65],
    },
    {
      label: '학생',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [65, 85, 80,60,60,70],
    }
  ],
  labels: ['자기 성찰∙계발 역량', '자료∙정보 활용 역량', '비판적∙창의적 사고 역량','문화 향유 역량', '의사소통역량', '공동체∙대인관계 역량'],
};

export const radarChartData360ENG = {
  datasets: [
    {
      label: '평균',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 70,87,65],
    },
    {
      label: '학생',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [55, 85,78,80],
    }
  ],
  labels: ['자기관리 역량', '지식정보처리 역량', '영어 의사소통 역량','공동체 역량'],
};

export const radarChartData360MATH = {
  datasets: [
    {
      label: '평균',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 70, 60,80,87,65],
    },
    {
      label: '학생',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [75, 85, 78,70,77,90],
    }
  ],
  labels: ['태도 및 실천', '문제 해결', '정보처리','추론','창의∙융합','의사소통'],
};

export const radarChartData360SCI= {
  datasets: [
    {
      label: '평균',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 70, 60,80,87],
    },
    {
      label: '학생',
      borderWidth: 2,
      pointBackgroundColor:  colors.themeColor2,
      borderColor:  colors.themeColor2,
      backgroundColor:  colors.themeColor2_10,
      data: [85, 75, 70,70,70],
    }
  ],
  labels: ['과학적 참여와 평생 학습 능력', '과학적 탐구능력', '과학적 문제 해결력','과학적 사고력', '과학적 의사소통 능력'],
};

export const radarChartDatadkt = {
  datasets: [
    {
      label: '',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [80, 90, 48],
    },

  ],
  labels: ["강좌수강수","강의수강수","진도율"],
};

export const radarChartData = {
  datasets: [
    {
      label: 'Stock',
      borderWidth: 2,
      pointBackgroundColor: '#900604',
      borderColor: '#900604',
      backgroundColor: '#900604',
      data: [80, 90, 70],
    },
    {
      label: 'Order',
      borderWidth: 2,
      pointBackgroundColor: '#007bff',
      borderColor: '#007bff',
      backgroundColor: '#007bff',
      data: [68, 80, 95],
    },
    {
      label: 'Order2',
      borderWidth: 2,
      pointBackgroundColor: '#0000ff',
      borderColor: '#0000ff',
      backgroundColor: '#0000ff',
      data: [78, 88, 90],
    },
  ],
  labels: ['Cakes', 'Desserts', 'Cupcakes'],
};

export const pieChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20],
    },
  ],
};
export const doughnutDataDOMain = {
  labels: ['고1','고2','고3','재수생'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor7,colors.themeColor6,colors.themeColor5,
            colors.themeColor4,colors.themeColor3, colors.themeColor2, colors.themeColor1],
      backgroundColor: [
        colors.themeColor7,colors.themeColor6,colors.themeColor5,
            colors.themeColor4,colors.themeColor3, colors.themeColor2, colors.themeColor1,
      ],
      borderWidth: 2,
      data: [0.55, 0.48,0.47,0.38],
    },
  ],
};


export const doughnutChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20],
    },
  ],
};


export const doughnutln= {
  labels: ['유창성', '어휘력', '단어량'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20],
    },
  ],
};

export const smallChartData1 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData2 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Pending Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [115, 120, 300, 222, 105, 85, 36],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData3 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [350, 452, 762, 952, 630, 85, 158],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData4 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [200, 452, 250, 630, 125, 85, 20],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const conversionChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [65, 60, 68, 60, 58, 63, 60],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor2_10,
    },
  ],
};
