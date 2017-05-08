import React from 'react';

export default function Issue(props) {
	let {data} = props;
	return (
		<article className="Issue">
			<a href={ data.html_url } title={ data.body || "No body" }>{ data.title }</a>
		</article>
	)
}
