import React, { Component } from 'react';
import Repos from './Repos';

class App extends Component {

	constructor() {
		super();
		this.state = {
			orgData: {},
			reposData: [],
			eventsData: []
		}
	}

	componentDidMount() {
		let organisation = this.props.organisation;

		if (!organisation) {
			return this.handleError('Parameter value <App organisation=""> is missing');
		}

		this.getOrg(organisation).then(orgData => {
			this.fetchEndpoint(orgData.repos_url).then(reposData => {
				this.fetchEndpoint(orgData.events_url).then(eventsData => {
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

	getOrg(org) {
		return fetch(`https://api.github.com/orgs/${org}`).then(res => {
			return res.json();
		})
	}
	fetchEndpoint(url) {
		return fetch(url).then(res => {
			return res.json();
		})
	}

	render() {
		return (
			<div className="App">
				<section>
					<h1>organistion-dashboard</h1>
					<p className="Nav">
						<a href={ this.state.orgData.html_url }>github</a>
						<a href={ this.state.orgData.repos_url }>api.repos</a>
						<a href={ this.state.orgData.events_url }>api.events</a>
					</p>
				</section>
				<section>
					<h2>Repos</h2>
					<Repos repos={ this.state.reposData }/>
				</section>
			</div>
		);
	}
}

export default App;
