import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import About from './components/About'
import Layout from './components/Layout'
import { Customer } from './components/Customers'


const App: React.FC = () => {
	const [customers, setCustomers] = React.useState<Customer[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const response: Response = await fetch('/api/customers');
			const data: Customer[]  = await response.json();
			setCustomers(data);
		}

		fetchData();
	}, []);

	return (
		<Router>
			<Route 
				path='/'
				exact
				render={() => (
					<Layout customers={customers} />
				)}
			/>
			<Route 
				path='/about'
				exact
				render={() => (
					<About />
				)}
			/>
		</Router>
	);
}

export default App;
