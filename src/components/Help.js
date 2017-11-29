import React from 'react';
import withScrollTop from './withScrollTop';

function Help(props) {
	let { model } = props;
	console.log('model', model)
	return (
		<div className="Help">
			<section className="Section">
				<h2>Informations</h2>
				<ul className="Nav">
					<li>
						Github organisation/user: <a href={ model.html_url }>{ model.login }</a>
					</li>
					<li>
						Homepage: <a href={ model.blog }>{ model.blog }</a>
					</li>
				</ul>
			</section>

			<section className="Section Shortcuts">
				<h2>Shortcuts</h2>
				<ul>
					<li>
						<kbd>tab</kbd> move focus to next link
					</li>
					<li>
						<kbd>S-tab</kbd> move focus to previous link
					</li>
					<li>
						<kbd>space</kbd> scroll viewport down of one screen
					</li>
					<li>
						<kbd>S-space</kbd> scroll viewport up of one screen
					</li>
					<li>
						<kbd>s</kbd> focus the search input if there is one
					</li>
					<li>
						<kbd>C-f</kbd> opens Firefox/Chrome/Chromium default site search
					</li>
				</ul>
			</section>

			<section className="Section">
				<h2>Workflows</h2>
				<p>When on the `/repos` route, you can filter repos with <kbd>s</kbd> and move only with the keyboard to the repo you want to access with a combination of Browser search (<kbd>C-f</kbd>) and focus movement with <kbd>tab</kbd>.</p>
				<p>If you press <kbd>tab</kbd> then you will focus elements of interests one after an other, press <kbd>return</kbd> (enter) to activate the selected element.</p>
				<p>If you want to quickly create a <strong>Github Issue</strong> on project. On the `/repos` route filter for your project (<kbd>s</kbd>), then <kbd>tab</kbd> until you reach the `gh` link, <kbd>enter</kbd> to activate it. Once on Github, you are on the homepage of the repo, just use Github native shortcuts <kbd>g i</kbd> to "go to Issues", then <kbd>c</kbd> to create a new issue.</p>
				<p>If you want to create a new <strong>Github Pull Request</strong>, do the same as above, but use the following shortcuts when you are the Github's site, <kbd>g p</kbd> to "go to Pull Requests", then again <kbd>c</kbd> to create an issue.</p>
			</section>

			<section className="Section">
				<h2>How to get more help?</h2>
				<p>Hover with your mouse the elements you want to know more details about.</p>
			</section>

			<section className="Section">
				<h2>Debug</h2>
				<ul>
					<li>
						Github API repo URL:<a href={ model.repos_url }>api.repos</a>
					</li>
					<li>
						Github API events URL: <a href={ model.events_url }>api.events</a>
					</li>
				</ul>
			</section>

			<section className="Section">
				<h2>About</h2>
				<ul>
					<li>
						Code: <a href="https://github.com/internet4000/dashboard-organisation">github/internet4000/dashboard-organisation</a>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default withScrollTop(Help);
