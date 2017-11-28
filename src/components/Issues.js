import React from 'react';
import Issue from './Issue';

export default function Issues(props) {
	if (props.items.length === 0) {
		return null;
	}
	return (
		<div className="Issues" title="Issues">
			<div className="List List--issues">
				{ props.items.map((issue, i) => <Issue key={i} data={issue} />) }
			</div>
		</div>
	)
}
