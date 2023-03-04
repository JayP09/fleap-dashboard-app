import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const Appointments = () => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div className={sidebar ? 'appointments navbar-active' : 'appointments'}>Appointments</div>
  );
};

export default Appointments;
