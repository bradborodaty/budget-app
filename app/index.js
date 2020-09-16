import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Layout from './components/Layout';

class BudgetApp extends React.Component {
	render() {
		return (
			<Layout />
		)
	}
}

ReactDOM.render(<BudgetApp />, document.getElementById('app'));