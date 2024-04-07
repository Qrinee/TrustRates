import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalFaults, setGlobalFaults] = useState([] );

  return (
    <GlobalContext.Provider value={{ globalFaults, setGlobalFaults}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);