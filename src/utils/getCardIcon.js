import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faWeightScale, faPumpMedical } from '@fortawesome/free-solid-svg-icons';

export const getCardIcon = (title) => {
  switch (title) {
    case 'Heart Rate':
      return <FontAwesomeIcon icon={faHeartPulse} size='2x' color='red' />;
    case 'Blood Pressure':
      return <FontAwesomeIcon icon={faWeightScale} size='2x' />;
    case 'Oxygen Saturation':
      return <FontAwesomeIcon icon={faPumpMedical} size='2x' color='blue' />;
    default:
      break;
  }
};
