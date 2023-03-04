import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const Reports = () => {
  const { sidebar } = useContext(SidebarContext);
  return <div className={sidebar ? 'reports navbar-active' : 'reports'}>Reports</div>;
};

export default Reports;
