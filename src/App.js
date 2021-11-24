import React from 'react'
import Header from './components/UI/Header'
import Banner from './components/UI/Banner'
import Games from './components/Games/Games'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GameDetail from './components/GameDetail/GameDetail'

const App = () => {
	return (
		<Router>
			<div className="min-h-screen bg-black">
				<Header/>
				<Switch>
					<Route path="/" exact>
						<>
							<Banner/>
							<Games/>
						</>
					</Route>
					<Route path="/games/:gameId">
						<GameDetail/>
					</Route>
				</Switch>
			</div>
		</Router>
  	)
}

export default App
