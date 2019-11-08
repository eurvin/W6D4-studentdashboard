import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardOverview from './containers/DashboardOverview/DashboardOverview';

function App() {
	return (
		<>
			<main className='container is-fluid'>
				<Router>
					<nav className='navbar'>
						<div className='navbar-start'>
							<h3 className='is-Primary is-size-3'>Student Dashboard</h3>
						</div>
						<div className='navbar-start'>
							<ul className='navbar-menu'>
								<Link to='/' className='navbar-item'>
									Home
								</Link>
								<Link to='/studenten' className='navbar-item'>
									Studenten
								</Link>
								<Link to='/opdrachten' className='navbar-item'>
									Opdrachten
								</Link>
							</ul>
						</div>
					</nav>
					<div>
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<DashboardOverview {...props} filter={'home'} />
								)}
							/>
						</Switch>
					</div>
				</Router>
			</main>
		</>
	);
}

export default App;
