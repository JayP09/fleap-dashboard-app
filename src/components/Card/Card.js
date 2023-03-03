import React from 'react';
import './Card.css';
import { getCardIcon } from '../../utils/getCardIcon';
import LineChart from '../LineChart/LineChart';
import { getChartData } from '../../utils/getChartData';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import LineChartSmartPhone from '../LineChart/LineChartSmartPhone';

const Card = ({ title, currentReading, allData, currentData, idForChart }) => {
  const chartData = getChartData(title);
  const { width } = useWindowDimensions();

  return (
    <div className='card-container'>
      <div className='card-data'>
        <div className='card-icon'>{getCardIcon(title)}</div>
        <div className='card-info'>
          <p>{currentReading}</p>
          <p>{title}</p>
        </div>
      </div>
      {width > 640 ? (
        <LineChart
          data={allData}
          width={width > 640 ? 460 : 202}
          height={140}
          yRangeMin={chartData.yRangeMin}
          yRangeMax={chartData.yRangeMax}
          currnetData={currentData}
          idForChart={idForChart}
        />
      ) : (
        <LineChartSmartPhone
          data={allData}
          width={width > 640 ? 460 : 202}
          height={140}
          yRangeMin={chartData.yRangeMin}
          yRangeMax={chartData.yRangeMax}
          currnetData={currentData}
          idForChart={`${idForChart}SmartPhone`}
        />
      )}
    </div>
  );
};

export default Card;
