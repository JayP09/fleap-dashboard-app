// Importing necessary packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Importing components and context
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
import Appointments from './pages/Appointments/Appointments';
import Support from './pages/Support/Support';
import { SidebarContextProvider } from './context/SidebarContext';
import Popup from './components/Popup/Popup';

// main component
const App = () => {
  const [buttonPopup, setButtonPopup] = useState(true);

  const closePopup = () => setButtonPopup(false);

  useEffect(() => {
    const timeout = setTimeout(closePopup, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SidebarContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/support' element={<Support />} />
        </Routes>
        <ToastContainer position='top-center' theme='colored' />
        {buttonPopup && <Popup closePopup={closePopup} />}
      </Router>
    </SidebarContextProvider>
  );
};

export default App;
