import React, { Component } from 'react';
import { fetchEndpoint } from '../api';
import PullRequests from './PullRequests';
import Issues from './Issues';

class Repo extends Component {

	constructor(props) {
		super();
		this.state = {
			prsData: [],
			issuesData: []
		}
	}

	componentDidMount() {
		fetchEndpoint(this.clean(this.props.repo.pulls_url)).then(prsData => {
			fetchEndpoint(this.clean(this.props.repo.issues_url)).then(issuesData => {
				this.setState({
					prsData,
					issuesData
				});
			})
		})
	}

	clean (url) {
		let filter = /{\/*.*}$/gm
		return url.replace(filter, '');
	}

	render() {
		let { repo } = this.props;
		let { prsData, issuesData } = this.state;
		return (
			<article className="Repo">
				<nav className="Repo-nav Nav">
					<strong title={ repo.description }>{repo.name}</strong>
					<a href={ repo.html_url }>gh</a>
					<a href={ repo.homepage }>site</a>
				</nav>
				<div className="Repo-body">
					<PullRequests items={ prsData }/>
					<Issues items={ issuesData }/>
				</div>
			</article>
		)
	}

}

export default Repo;
