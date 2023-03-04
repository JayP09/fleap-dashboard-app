import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import './Popup.css';

const Popup = ({ closePopup }) => {
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={closePopup}>
          <UilTimes size='40' color='#01193e' />
        </button>
        <h2>Welcome to the Fleap Dashboard App</h2>
        <ul className='popup-text'>
          <li>
            This app allows you to monitor a patient's vital signs, such as heart rate, blood
            pressure, and oxygen saturation, for 1 minute.
          </li>
          <li>To start monitoring, click on the 'Start' button.</li>
          <li>To stop monitoring, click on the 'Stop' button.</li>
          <li>
            If you start monitoring and don't press the 'Stop' button, the monitoring will
            automatically stop after 1 minute.
          </li>
          <li>You can also pause the monitoring by clicking on the 'Stop' button.</li>
          <li>When you click on 'Start' again, it will resume from where it left off.</li>
          <li>
            Additionally, you can press the 'Reset' button to clear the monitoring system and start
            again from the beginning.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Popup;
