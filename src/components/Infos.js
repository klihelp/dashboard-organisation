import React from 'react';

export default function Infos(props) {
	let { model } = props;
	return (
		<nav className="Nav">
			<a href={ model.blog }>{ model.login }</a>
			<a href={ model.html_url }>github</a>
			<a href={ model.repos_url }>api.repos</a>
			<a href={ model.events_url }>api.events</a>
			<a href="https://github.com/internet4000/dashboard-organisation">github/dashboard-organisation</a>
		</nav>
	)
}
