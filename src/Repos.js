import React from 'react';
import Loading from './Loading';
import Repo from './Repo';

export default function Repos(props) {
	if (!props.repos) {
		return <Loading message="Loading list..."/>
	}
	return (
		<div className="List">
			{ props.repos.map((repo, i) => <Repo key={i} repo={repo} />) }
		</div>
	)
}
