import React, { Component } from 'react';
import { fetchEndpoint, getOrg } from './api';
import Loading from './components/Loading';
import Repos from './components/Repos';

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
			<div className="App">
				<section>
					<nav className="Nav">
						<a href={ this.state.orgData.blog } ref={ a => a && a.focus() }>{ this.state.orgData.login }</a>
						<a href={ this.state.orgData.html_url }>github</a>
						<a href={ this.state.orgData.repos_url }>api.repos</a>
						<a href={ this.state.orgData.events_url }>api.events</a>
					</nav>
				</section>
				<section>
					<Repos repos={ this.state.reposData }/>
				</section>
			</div>
		);
	}
}

export default App;
