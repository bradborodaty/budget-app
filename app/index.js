import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class BudgetApp extends React.Component {
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<BudgetApp />, document.getElementById('app'));