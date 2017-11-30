import React, { Component } from 'react';
import {
  Route,
  NavLink,
	withRouter
} from 'react-router-dom';
import { fetchEndpoint, getOrg, getUser } from './api';
import Loading from './components/Loading';
import Help from './components/Help';
import Repos from './components/Repos';
import EventsGroups from './components/EventsGroups';
import HotKeysGlobal from './components/HotKeysGlobal.js';


class App extends Component {

	focusSearch() {
		const searchEls = [...document.querySelectorAll('input[type="search"]')]
		searchEls[0].focus();
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
			return <section><Loading message="Loading organisation data..."/></section>;
		}

		return (

			<HotKeysGlobal
				focusSearch={ this.focusSearch }
				history={ this.props.history }>
				<div className="App Container">
					<section
						className="Aside Container"
						tabIndex="-1"
					>
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
						className="Container Container--full"
						ref={ focusEl => { this.focusEl = focusEl } }
					>
						<Route exact path="/" component={ () => ( <Repos repos={ this.state.reposData }/> ) }/>
						<Route path="/events" component={ () => ( <EventsGroups events={ this.state.eventsData }/> ) }/>
						<Route path="/help" component={ () => ( <Help model={ this.state.orgData }/> ) }/>
					</section>
					<footer className="SiteFooter" tabIndex="0">
						<a href="https://github.com/internet4000/dashboard-organisation">code</a>
					</footer>
				</div>
			</HotKeysGlobal>
		)
	}
}

export default withRouter(App);
