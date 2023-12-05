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

export const BCDAdmin = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월','7월','8월','9월','10월','11월','12월'],
  datasets: [
    {
      label: '계열1',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324, 569, 702, 600,656, 679, 624, 596, 602, 600],
      borderWidth: 2,
    },
    {
      label: '계열2',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605, 400, 345, 320, 464, 404, 505, 500, 445, 520],
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
    },
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
  labels: ['유창성', '어휘력', '단어량','유창성', '어휘력', '단어량'],
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
