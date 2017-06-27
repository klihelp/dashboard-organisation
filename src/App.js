import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { fetchEndpoint, getOrg } from './api';
import Loading from './components/Loading';
import Infos from './components/Infos';
import Repos from './components/Repos';
import EventsGroups from './components/EventsGroups';
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
	componentDidUpdate() {
		/* ReactDOM.findDOMNode(this.focusEl).focus();*/
		this.focusEl.focus();
	}

	handleError(e) {
		console.log(e)
	}

	render() {

		if (!this.state.orgData) {
			return <section><Loading message="Loading organisation data..."/></section>
		}

		return (
			<Router>
				<div className="App">
					<section tabIndex="-1" className="Aside">
						<nav className="Nav Nav--main">
							<Link to="/" >repos</Link>
							<Link to="/events">events</Link>
							<Link to="/infos">infos</Link>
							<Link to="/shortcuts">shortcuts</Link>
						</nav>
					</section>
					<section ref={ focusEl => { this.focusEl = focusEl } }>
						<Route path="/infos" component={ () => ( <Infos model={ this.state.orgData }/> ) }/>
						<Route exact path="/" component={ () => ( <Repos repos={ this.state.reposData }/> ) }/>
						<Route path="/events" component={ () => ( <EventsGroups events={ this.state.eventsData }/> ) }/>
						<Route path="/shortcuts" component={ Shortcuts }/>
					</section>
				</div>
			</Router>
		)
	}
}

export default App;
