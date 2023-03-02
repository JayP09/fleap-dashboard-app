// Importing necessary packages
import React, { useContext } from 'react';
import './Dashboard.css';

// Importing components and context
import Card from '../../components/Card/Card';
import { SidebarContext } from '../../context/SidebarContext';

// Defining the Dashboard component
const Dashboard = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <main
      className={sidebar ? 'main-dashboard-container navbar-active' : 'main-dashboard-container'}
    >
      <h1>Monitoring System</h1>
      <div className='dashboard-container'>
        <div className='dashboard-card-container'>
          <Card title='Heart Rate' readingData={`${80} bpm`} />
        </div>
        <div className='dashboard-card-container'>
          <Card title='Blood Pressure' readingData={`${80} mmHg`} />
        </div>
        <div className='dashboard-card-container'>
          <Card title='Oxygen Saturation' readingData={`${80}%`} />
        </div>
        <div className='order dashboard-card-container'>
          <div className='button-container'>
            <h2>Control Monitoring System</h2>
            <button className='dashboard-button start'>Start</button>
            <button className='dashboard-button stop'>Stop</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
