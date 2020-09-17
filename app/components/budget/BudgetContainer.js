import React, { useState, useContext, useEffect } from 'react';

import { BudgetProviderContext } from '../../providers/BudgetProvider';

function BudgetContainer() {
  // provider for data and to update data
  const budgetContext = useContext(BudgetProviderContext);
  // take a copy of the provider data to work with
  const [data, setData] = useState(budgetContext.data);

  console.log(data);

  // check for data from the provider and reset our data copy when it exists
  useEffect(() => {
    if(budgetContext.data.lastUpdated) {
      setData(budgetContext.data);
    }
  }, [budgetContext.data])

  return (
    <div>
      {!data.lastUpdated ?
        <p>Loading....</p>
      :
      <div>
        <p>This is the BudgetContainer</p>
        <p>This budget was last updated: {data.lastUpdated}</p>
        <ul>
          {data.items.map(item => (
            <li key={item.lastUpdated}>{item.name}: {item.amount}</li>
          ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default BudgetContainer;