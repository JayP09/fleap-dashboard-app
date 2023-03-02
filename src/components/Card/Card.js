import React from 'react';
import './Card.css';
import { getCardIcon } from '../../utils/getCardIcon';

const Card = ({ title, readingData }) => {
  return (
    <div className='card-container'>
      <div className='card-data'>
        <div className='card-icon'>{getCardIcon(title)}</div>
        <div className='card-info'>
          <p>{readingData}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
