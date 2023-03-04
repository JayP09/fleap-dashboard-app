// Importing necessary dependencies and assets
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import './Navbar.css';
import { SidebarContext } from '../../context/SidebarContext';
import { SidebarData } from '../../utils/SidebarData';
import patientImage from '../../assets/avatar.png';
import Logo from '../../assets/logo.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Navbar = () => {
  const { sidebar, showSidebar } = useContext(SidebarContext);
  const { width } = useWindowDimensions();

  return (
    <>
      <div className='navbar'>
        {/* Icon to toggle the sidebar */}
        <Link to='#' className='menu-bars'>
          <UilBars size='40' onClick={showSidebar} color='#01193e' />
        </Link>
        {/* Displaying some patient information */}
        <div className='patient-info'>
          <img src={patientImage} alt='patient' />
          <p>Patient Name</p>
        </div>
      </div>
      {/* The sidebar */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='navbar-toggle'>
          <Link to='#' className='menu-bars' onClick={showSidebar}>
            <UilTimes size='40' color='#01193e' />
          </Link>
        </div>
        {/* Fleap logo */}
        <div className='logo'>
          <img src={Logo} alt='fleap logo' />
        </div>
        {/* Sidebar menu items */}
        {width > 875 ? (
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
