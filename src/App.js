// Importing necessary packages
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Importing components and context
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import { SidebarContextProvider } from './context/SidebarContext';

// main component
const App = () => {
  return (
    <SidebarContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
        <ToastContainer position='top-center' theme='colored' />
      </Router>
    </SidebarContextProvider>
  );
};

export default App;
