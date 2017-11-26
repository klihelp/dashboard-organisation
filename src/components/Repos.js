import React from 'react';
import Loading from './Loading';
import Repo from './Repo';
import withScrollTop from './withScrollTop';

function Repos(props) {
	if (!props.repos) {
		return <Loading message="Loading list..."/>
	}
	return (
		<div className="List List--repos">
			{ props.repos.map((repo, i) => <Repo key={i} repo={repo} />) }
		</div>
	)
}

export default withScrollTop(Repos);
