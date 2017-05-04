import React, { Component } from 'react';

class Repo extends Component {

	clean (url) {
		let filter = /{\/*.*}$/gm
		return url.replace(filter, '');
	}

	render() {
		let { repo } = this.props;
		return (
			<div className="Repo Nav">
				<a href={ repo.html_url }> {repo.name}</a>
				<a href={ this.clean(repo.issues_url) }>issues ({ repo.open_issues })</a>
				<a href={ this.clean(repo.pulls_url) }>PR</a>
			</div>
		)
	}

}

export default Repo;
