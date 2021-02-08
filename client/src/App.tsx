import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import About from './components/About/About'
import Layout from './components/Layout/Layout'

const ENDPOINT = "http://192.168.1.17:5000"

const App: React.FC = () => {
	const [response, setResponse] = React.useState("");

	React.useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.on("FromAPI", data =>
			{
				setResponse(data);
			}
		);
		console.log("working")
	}, []);

	return (
		<Router>
			<p>
				It's <time dateTime={response}>{response}</time>
			</p>
			<Route 
				path='/'
				exact
				render={() => (
					<Layout />
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
