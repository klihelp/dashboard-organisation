import React from 'react';

export default function Event(props) {
	return (
		<article className="Event">
			<p>{ props.data.repo.name }</p>
		</article>
	)
}
