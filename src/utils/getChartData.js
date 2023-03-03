export const getChartData = (title) => {
  switch (title) {
    case 'Heart Rate':
      return { yRangeMin: 30, yRangeMax: 130 };
    case 'Blood Pressure':
      return { yRangeMin: 60, yRangeMax: 140 };
    case 'Oxygen Saturation':
      return { yRangeMin: 85, yRangeMax: 100 };
    default:
      break;
  }
};
