import React, { Component } from 'react';
import {
  Route,
  NavLink,
	withRouter
} from 'react-router-dom';
import { HotKeys } from 'react-hotkeys';
import { fetchEndpoint, getOrg, getUser } from './api';
import Loading from './components/Loading';
import Help from './components/Help';
import Repos from './components/Repos';
import EventsGroups from './components/EventsGroups';

class App extends Component {

	hotkeys = {
		'1': () => this.props.history.push('/'),
		'2': () => this.props.history.push('/events'),
		'3': () => this.props.history.push('/help')
	}

	constructor() {
		super();
		this.state = {
			orgData: null,
			reposData: [],
			eventsData: []
		}
	}

	componentDidMount() {
		this.setupEnv().then(orgData => {
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

	setupEnv() {
		let organisation = process.env.REACT_APP_ORGANISATION;
		let user = process.env.REACT_APP_USER;
		let initialData;

		console.log('Documentation: https://github.com/internet4000/organisation-dashboard');

		if (process.env.NODE_ENV !== 'production') {
			organisation = 'internet4000';
			/* user = 'hugurp';*/
		}

		if (organisation) {
			initialData = getOrg(organisation);
			this.setDocumentTitle(organisation)
		} else if (user) {
			initialData = getUser(user);
			this.setDocumentTitle(user)
		} else {
			return this.handleError('ENV variable `REACT_APP_ORGANISATION` or `REACT_APP_USER` is missing. Check out the docs.');
		}

		return initialData;
	}

	setDocumentTitle(title) {
		document.title = `${title} dashboard`
	}

	handleError(e) {
		console.log(e)
	}

	render() {

		if (!this.state.orgData) {
			return <section><Loading message="Loading organisation data..."/></section>
		}

		return (
			<HotKeys focused attach={ document } handlers={ this.hotkeys }>
				<div className="App Container">
					<section tabIndex="-1" className="Aside Container">
						<nav className="Nav Nav--main">
							<h1 className="SiteTitle">
								⛅☀
							</h1>
							<NavLink exact to="/" >repos(1)</NavLink>
							<NavLink to="/events">events(2)</NavLink>
							<NavLink to="/help">help(3)</NavLink>
						</nav>
					</section>
					<section
						ref={ focusEl => { this.focusEl = focusEl } }
						className="Container">
						<Route exact path="/" component={ () => ( <Repos repos={ this.state.reposData }/> ) }/>
						<Route path="/events" component={ () => ( <EventsGroups events={ this.state.eventsData }/> ) }/>
						<Route path="/help" component={ () => ( <Help model={ this.state.orgData }/> ) }/>
					</section>
				</div>
			</HotKeys>
		)
	}
}

export default withRouter(App);
