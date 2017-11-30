import React from 'react';
import { HotKeys } from 'react-hotkeys';

const onKeyUp = (key) => ({ sequence: key, action: 'keyup' })

export default function(props) {
	const keyMap = {
		'focusSearch': onKeyUp('s'),
		'gotoRepos': onKeyUp('1'),
		'gotoEvents': onKeyUp('2'),
		'gotoHelp': onKeyUp('3')
	}

	const keyHandlers = {
		'gotoRepos': () => props.history.push('/'),
		'gotoEvents': () => props.history.push('/events'),
		'gotoHelp': () => props.history.push('/help'),
		'focusSearch': () => props.focusSearch()
	}

	return (
		<HotKeys
			focused
			attach={ document }
			handlers={ keyHandlers }
			keyMap={ keyMap }>
			{ props.children }
		</HotKeys>
	)
}
