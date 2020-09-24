import React, { useState, useEffect } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const BudgetProviderContext = React.createContext({});

function BudgetProvider(props) {
  const [data, setData] = useLocalStorage('bdgdata', {});

  useEffect(() => {
    let items = {
      items: [
        {
          name: 'Rent',
          amount: '$2,000',
          category: 'expense'
        },
        {
          name: 'Utility',
          amount: '$400',
          category: 'expense'
        }
      ],
      title: 'House Budget',
      lastUpdated: Date.now(),
    };

    setData(items);
  }, []);

  // add new budget item
  const addItem = (name,amount,category) => {
    console.log(name, amount, category);
    // budget item to add to array
    let newItem = {name,amount,category};
    // take current state of data
    let copyData = data;
    // push new item
    copyData.items.push(newItem);
    // update timestamp
    copyData.lastUpdated = Date.now();
    // set the new value
    setData(copyData);
  };

  // object that will be passed through to each component that uses this providers context
  const value = {
    data,
    addItem
  }

  return (
    <BudgetProviderContext.Provider value={value}>
      {props.children}
    </BudgetProviderContext.Provider>
  )
}

export default BudgetProvider;