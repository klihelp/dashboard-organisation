import React from 'react';

export default function Help(props) {
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
				<article className="Shortcut">
					<pre className="Shortcut-key">TAB</pre> move focus to next link
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">shift + TAB</pre> move focus to previous link
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">SPACE</pre> scroll viewport down of one screen
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">shift + SPACE</pre> scroll viewport up of one screen
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">CTRL + F</pre> opens Firefox default search
				</article>
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
