import React from 'react';
import {
  UilCreateDashboard,
  UilFileGraph,
  UilSchedule,
  UilComments,
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <UilCreateDashboard color='#1578FF' />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <UilFileGraph color='#1578FF' />,
    cName: 'nav-text',
  },
  {
    title: 'Appointments',
    path: '/appointments',
    icon: <UilSchedule color='#1578FF' />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <UilComments color='#1578FF' />,
    cName: 'nav-text',
  },
];
