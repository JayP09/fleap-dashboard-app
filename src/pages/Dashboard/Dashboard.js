// Importing necessary packages
import React, { useContext, useState, useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import './Dashboard.css';

// Importing components and context
import Card from '../../components/Card/Card';
import { SidebarContext } from '../../context/SidebarContext';

// Defining the Dashboard component
const Dashboard = () => {
  const { sidebar } = useContext(SidebarContext);
  const [allData, setAllData] = useState([
    { label: 0, heartRate: 60, bloodPressure: 80, oxygenSaturation: 86 },
  ]);
  const storeInterval = useRef(null);
  const storeTimeout = useRef(null);
  const [currnetData, setCurrentData] = useState({
    heartRate: 0,
    bloodPressure: 0,
    oxygenSaturation: 0,
  });

  // function to regenerate new data and update the state
  const regenerateData = useCallback(() => {
    let newData = {
      label: 0,
      heartRate: Math.floor(Math.random() * (130 - 30) + 30),
      bloodPressure: Math.floor(Math.random() * (140 - 60) + 60),
      oxygenSaturation: Math.random() * (100 - 85) + 85,
    };

    // showing alerts for urgent alerts
    if (newData.heartRate < 60) toast.error('Urgent Alert: Heart rate below 60');
    else if (newData.heartRate > 100) toast.error('Urgent Alert: Heart rate above 100');

    if (newData.heartRate < 80) toast.error('Urgent Alert: Blood Pressure below 80');
    else if (newData.heartRate > 120) toast.error('Urgent Alert: Blood Pressure above 120');

    if (newData.oxygenSaturation < 85) toast.error('Urgent Alert: Oxygen Saturation below 85');

    setAllData((oldData) => {
      const newLabel = oldData.length * 5;
      newData.label = newLabel;
      return [newData, ...oldData];
    });
    setCurrentData(newData);
  }, []);

  // function to start monitoring system
  const startInterval = useCallback(() => {
    toast.success('Health Monitoring System Started');
    storeInterval.current = setInterval(regenerateData, 5000);
    storeTimeout.current = setTimeout(stopInterval, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regenerateData]);

  // function to stop monitoring system
  const stopInterval = useCallback(() => {
    clearInterval(storeInterval.current);
    clearTimeout(storeTimeout.current);
    toast.info('Health Monitoring System Stopped');
  }, []);

  const resetSystem = useCallback(() => {
    clearInterval(storeInterval.current);
    clearTimeout(storeTimeout.current);
    setAllData({ label: 0, heartRate: 60, bloodPressure: 80, oxygenSaturation: 86 });
    setCurrentData({
      heartRate: 0,
      bloodPressure: 0,
      oxygenSaturation: 0,
    });
    toast.info('Health Monitoring System Reset successfully');
  }, []);

  return (
    <main
      className={sidebar ? 'main-dashboard-container navbar-active' : 'main-dashboard-container'}
    >
      <h1>Monitoring System</h1>
      <div className='dashboard-container'>
        <div className='dashboard-card-container'>
          <Card
            title='Heart Rate'
            currentReading={`${currnetData.heartRate} bpm`}
            allData={allData}
            currnetData={currnetData}
            idForChart={`heartRate`}
          />
        </div>
        <div className='dashboard-card-container'>
          <Card
            title='Blood Pressure'
            currentReading={`${currnetData.bloodPressure} mmHg`}
            allData={allData}
            currnetData={currnetData}
            idForChart={`bloodPressure`}
          />
        </div>
        <div className='dashboard-card-container'>
          <Card
            title='Oxygen Saturation'
            currentReading={`${currnetData.oxygenSaturation.toFixed(2)}%`}
            allData={allData}
            currnetData={currnetData}
            idForChart={`oxygenSaturation`}
          />
        </div>
        <div className='order dashboard-card-container'>
          <div className='button-container'>
            <h2>Control Monitoring System</h2>
            <button className='dashboard-button start' onClick={startInterval}>
              Start
            </button>
            <button className='dashboard-button stop' onClick={stopInterval}>
              Stop
            </button>
            <button className='dashboard-button reset' onClick={resetSystem}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
