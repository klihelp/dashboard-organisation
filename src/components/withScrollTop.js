import React from 'react';

export default function withScrollTop(Component) {
	return class ScrollTopComponent extends React.Component {
		componentDidMount() {
			window.scrollTo(0, 0);
		}
		render() {
			return <Component { ...this.props }/>
		}
	}
}
