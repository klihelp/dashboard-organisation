import React from 'react';

export default function PullRequest(props) {
	let {data} = props;
	return (
		<p>
			<a href={ data.url }>{ data.title }</a>
		</p>
	)
}
