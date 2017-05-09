import React from 'react';

export default function Shortcuts() {
	return (
		<div classNames="Shortcuts">
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
		</div>
	)
}
