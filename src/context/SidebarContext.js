// Importing required hooks from React
import React, { createContext, useEffect, useState } from 'react';

// Importing a custom hook to get window dimensions
import useWindowDimensions from '../hooks/useWindowDimensions';

// Creating a new context for the sidebar
export const SidebarContext = createContext(null);

// Creating a new component to provide the sidebar context to its children
export const SidebarContextProvider = ({ children }) => {
  const { width } = useWindowDimensions();
  let initialState = width < 875 ? false : true;
  const [sidebar, setSidebar] = useState(initialState);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    let initialState = width < 875 ? false : true;
    setSidebar(initialState);
  }, [width]);

  return (
    <SidebarContext.Provider value={{ sidebar, showSidebar }}>{children}</SidebarContext.Provider>
  );
};
