import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const Support = () => {
  const { sidebar } = useContext(SidebarContext);
  return <div className={sidebar ? 'support navbar-active' : 'support'}>Support</div>;
};

export default Support;
