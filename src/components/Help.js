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
				<article className="Shortcut">
					<pre className="Shortcut-key">tab</pre> move focus to next link
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">S-tab</pre> move focus to previous link
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">space</pre> scroll viewport down of one screen
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">S-space</pre> scroll viewport up of one screen
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">s</pre> focus the search input if there is one
				</article>
				<article className="Shortcut">
					<pre className="Shortcut-key">CTRL + F</pre> opens Firefox/Chrome/Chromium default site search
				</article>
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
