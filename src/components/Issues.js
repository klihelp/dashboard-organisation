import React from 'react';
import Loading from './Loading';
import Issue from './Issue';

export default function Issues(props) {
	if (!props.items) {
		return <Loading message="Loading list..."/>
	}
	return (
		<div className="List List--issues">
			{ props.items.map((issue, i) => <Issue key={i} issue={issue} />) }
		</div>
	)
}
