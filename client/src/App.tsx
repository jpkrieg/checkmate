import React, { useState, useEffect, CSSProperties } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import About from './components/About/About'
import Layout from './components/Layout/Layout'
import GameView from './components/GameView/GameView'
import { randomInt } from "crypto";

const App: React.FC = () => {
	return (
		<Router>

			<Route
				path='/'
				exact
				render={() => (
					<div className="iframe-div">
						<iframe
							src="http://192.168.1.18:3000/GameView/1"
							sandbox="allow-same-origin allow-scripts"
						/>
						<iframe
							src="http://192.168.1.18:3000/GameView/2"
							sandbox="allow-same-origin allow-scripts"
						/>
					</div>
				)}
			/>
			
			<Route 
				path='/GameView/:id'
				exact
				render={({ match }) => (
					<GameView clientId={match.params.id} />
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
