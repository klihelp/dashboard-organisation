import React, { Component } from 'react';
import { fetchEndpoint } from './api';
import PullRequests from './PullRequests';

class Repo extends Component {

	constructor(props) {
		super();
		this.state = {
			prsData: null
		}
	}

	componentDidMount() {
		this.insertPR(this.props.repo.pulls_url);
	}

	clean (url) {
		let filter = /{\/*.*}$/gm
		return url.replace(filter, '');
	}

	insertPR(url) {
		console.log('url', url);
		return fetchEndpoint(this.clean(url)).then(prsData => {
			console.log('prsData', prsData);
			this.setState({prsData});
		})
	}

	render() {
		let { repo } = this.props;
		return (
			<div className="Repo">
				<nav className="Nav">
					<strong>{repo.name}</strong>
					<span>-</span>
					<a href={ repo.html_url } title="Git URL">gh</a>
					<a href={ repo.homepage } title="Project homepage">site</a>
					<span>-</span>
					<a href={ this.clean(repo.issues_url) }>issues.api ({ repo.open_issues })</a>
					<a href={ this.clean(repo.pulls_url) }>pr.api</a>
				</nav>
				<PullRequests items={ this.state.prsData }/>
			</div>
		)
	}

}

export default Repo;
