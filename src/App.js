import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { fetchEndpoint, getOrg } from './api';
import Loading from './components/Loading';
import Home from './components/Home';
import Repos from './components/Repos';
import Shortcuts from './components/Shortcuts';

class App extends Component {

	constructor() {
		super();
		this.state = {
			orgData: null,
			reposData: [],
			eventsData: []
		}
	}

	componentDidMount() {
		let organisation = this.props.organisation;

		if (!organisation) {
			return this.handleError('Parameter value <App organisation=""> is missing');
		}

		document.title = `${organisation} dashboard`

		getOrg(organisation).then(orgData => {
			fetchEndpoint(orgData.repos_url).then(reposData => {
				fetchEndpoint(orgData.events_url).then(eventsData => {
					this.setState({
						orgData,
						reposData,
						eventsData
					});
					console.log('orgData', orgData);
					console.log('reposData', reposData);
					console.log('eventsData', eventsData);
				})
			})
		}).catch(this.handleError);
	}

	handleError(e) {
		throw new Error(e);
	}

	render() {

		if (!this.state.orgData) {
			return <Loading message="Loading organisation data..."/>
		}

		return (
			<Router>
				<div className="App">
					<section>
						<nav className="Nav Nav--main">
							<Link to="/home">home</Link>
							<Link to="/">repos</Link>
							<Link to="/shortcuts">Shortcuts</Link>
						</nav>
					</section>
					<section>
						<Route path="/home" component={ () => ( <Home model={ this.state.orgData }/> ) }/>
						<Route exact path="/" component={ () => ( <Repos repos={ this.state.reposData }/> ) }/>
						<Route path="/shortcuts" component={ Shortcuts }/>
					</section>
				</div>
			</Router>
		)
	}
}

export default App;
