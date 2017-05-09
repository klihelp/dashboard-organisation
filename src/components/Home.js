import React from 'react';

export default function Home(props) {
	let { model } = props;
	return (
		<nav className="Nav">
			<a href={ model.blog } ref={ a => a && a.focus() }>{ model.login }</a>
			<a href={ model.html_url }>github</a>
			<a href={ model.repos_url }>api.repos</a>
			<a href={ model.events_url }>api.events</a>
		</nav>
	)
}
