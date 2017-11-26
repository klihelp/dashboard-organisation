import React from 'react';

export default function Infos(props) {
	let { model } = props;
	console.log('model', model)
	return (
		<ul className="Nav">
			<li>
				Login: <a href={ model.blog }>{ model.login }</a>
			</li>
			<li>
				Website URL: <a href={ model.html_url }>github</a>
			</li>
			<li>
				Github API repo URL:<a href={ model.repos_url }>api.repos</a>
			</li>
			<li>
				Github API events URL: <a href={ model.events_url }>api.events</a>
			</li>
			<li>
				Code: <a href="https://github.com/internet4000/dashboard-organisation">github/dashboard-organisation</a>
			</li>
		</ul>
	)
}
