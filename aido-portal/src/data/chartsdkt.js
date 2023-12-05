import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

export const lineChartData = {
  labels: ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월'],
  datasets: [
    {
      label: '미분',
      data: [54, 63, 60, 68, 72, 80, 75, 83, 90],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '적분',
      data: [24, 33, 40, 35, 48, 50, 55, 63, 60],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '확률',
      data: [53, 58, 62, 68, 72, 80, 75, 83, 83],
      borderColor: colors.themeColor3,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor3,
      pointHoverBackgroundColor: colors.themeColor3,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '통계',
      data: [51, 53, 50, 58, 62, 60, 65, 73, 80],
      borderColor: colors.themeColor4,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor4,
      pointHoverBackgroundColor: colors.themeColor4,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '기하',
      data: [18, 23, 30, 27, 32, 40, 45, 52, 60],
      borderColor: colors.themeColor5,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor5,
      pointHoverBackgroundColor: colors.themeColor5,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};



export const linekor = {
  labels: ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월'],
  datasets: [
    {
      label: '화법',
      data: [71, 83, 80, 78, 82, 90, 85, 93, 90],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '작문',
      data: [60, 58, 67, 78, 72, 80, 75, 83, 83],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '문법',
      data: [74, 80, 75, 88, 85, 93, 91, 87, 90],
      borderColor: colors.themeColor3,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor3,
      pointHoverBackgroundColor: colors.themeColor3,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '문학',
      data: [60, 58, 67, 78, 72, 80, 75, 83, 83],
      borderColor: colors.themeColor4,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor4,
      pointHoverBackgroundColor: colors.themeColor4,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '비문학',
      data: [18, 23, 30, 27, 32, 40, 45, 52, 60],
      borderColor: colors.themeColor5,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor5,
      pointHoverBackgroundColor: colors.themeColor5,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};

export const linescience = {
  labels: ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월'],
  datasets: [
    {
      label: '물리',
      data: [60, 55, 60, 68, 72, 75, 80, 73, 75],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '화학',
      data: [64, 60, 75, 70, 75, 73, 81, 77, 80],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '생명과학',
      data: [38, 43, 20, 27, 32, 50, 45, 62, 60],
      borderColor: colors.themeColor3,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor3,
      pointHoverBackgroundColor: colors.themeColor3,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '지구과학',
      data: [24, 33, 40, 35, 45, 48, 50, 53, 55],
      borderColor: colors.themeColor4,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor4,
      pointHoverBackgroundColor: colors.themeColor4,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '통합과학',
      data: [60, 58, 67, 78, 72, 80, 75, 83, 83],
      borderColor: colors.themeColor5,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor5,
      pointHoverBackgroundColor: colors.themeColor5,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};


export const lineeng = {
  labels: ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월'],
  datasets: [
    {
      label: '동사의 시제',
      data:[34, 40, 45, 60, 55, 63, 71, 77, 80],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '형용사와 부사',
      data: [24, 33, 40, 35, 48, 50, 55, 63, 60],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '접속사',
      data: [60, 58, 67, 78, 72, 80, 75, 83, 83],
      borderColor: colors.themeColor3,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor3,
      pointHoverBackgroundColor: colors.themeColor3,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '부정사',
      data: [51, 53, 50, 58, 62, 60, 65, 73, 80],
      borderColor: colors.themeColor4,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor4,
      pointHoverBackgroundColor: colors.themeColor4,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
    {
      label: '동명사',
      data: [18, 23, 30, 27, 32, 40, 45, 52, 60],
      borderColor: colors.themeColor5,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor5,
      pointHoverBackgroundColor: colors.themeColor5,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 3,
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

export const radarChartData = {
  datasets: [
    {
      label: '취약 개념',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [60, 63, 70, 50, 48, 54, 45, 65, 70, 50],
    },
    
  ],
  labels: ['정적분의 활용', '부정적분의 활용', '정적분과 부정적분','도함수의 활용','미분계수와 도함수', 
           '여러가지 미분법', '삼각함수의 활용', '삼각함수의 그래프', '수열의 극한', '급수'],  // TOP 10 리스트와 동일 
};

export const radarkor = {
  datasets: [
    {
      label: '취약 개념',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [72, 54, 68, 72, 75, 80, 65, 71, 80, 56],
    },
    
  ],
  labels: ['고전 시가', '고전 소설', '문법','접속사','분사구문', 'to부정사', '현재 완료', '과거 완료', '동명사', '원급 비교']
};

export const radareng = {
  datasets: [
    {
      label: '취약 개념',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [34, 63, 70, 45, 68, 54, 65, 39, 70, 50],
    },
    
  ],
  labels: ['관계대명사', '현재 완료 진행형', '과거 완료','접속사','분사구문', 'to부정사', '현재 완료', '과거 완료', '동명사', '원급 비교']
};

export const radarscience = {
  datasets: [
    {
      label: '취약 개념',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [83, 78, 67, 74, 69, 52, 46, 61, 72, 80],
    },
    
  ],
  labels: ['생식과 유전', '화학 반응', '에너지 전환','별과 우주','빛과 파동', '여러 가지 힘', '지권의 변화', '물질의 구성', '생물의 다양성', '물질의 특성']
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
