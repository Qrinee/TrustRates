import React, { createContext, useState, useContext } from 'react';

const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState([{
    money: '300ZŁ',
    description: 'Sdfasdfsdafasdfsadfsadf'
  }]);

  return (
    <MoneyContext.Provider value={{ money, setMoney}}>
      {children}
    </MoneyContext.Provider>
  );
};

export const useMoney = () => useContext(MoneyContext);