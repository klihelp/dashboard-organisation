import React from 'react';

export default function Loading(props) {
	if (!props.message) {
		return <p>Loading...</p>
	}
	return <p>{ props.message }</p>
}
