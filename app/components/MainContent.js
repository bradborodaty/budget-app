import React from 'react';

import BudgetProvider from '../providers/BudgetProvider';
import BudgetContainer from './budget/BudgetContainer';

function MainContent() {
  return (
    <div className="container">
      <p>This is the MainContent</p>
      <BudgetProvider>
        <BudgetContainer />
      </BudgetProvider>
    </div>
  )
}

export default MainContent;