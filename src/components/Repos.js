import React, { Component } from 'react';
import Jets from 'jets';
import Loading from './Loading';
import Repo from './Repo';
import withScrollTop from './withScrollTop';

class Repos extends Component {

	constructor() {
		super();

		this.state = {
			jetsSearch: '',
			jets: {}
		}
	}

	componentDidMount() {
		const jets = new Jets({
			callSearchManually: true,
			contentTag: '#jetsContent'
		});

		this.state = {
			jets
		}
	}

	componentWillUnmount() {
		this.state.jets.destroy();
	}

	handleSearch = (e) => {
		this.setState({
	    [e.target.name] : e.target.value
		});
		this.state.jets.search(e.target.value)
		console.log('this.state.jets', this.state.jets)
	}

	render() {
		const { repos } = this.props;
		const { jetsSearch } = this.state;

		if (!repos) {
			return <Loading message="Loading list..."/>
		}

		return (
			<div>

				<input
				type="search"
				name="jetsSearch"
				id="jetsSearch"
				title="Press `s` to focus this search, `tab` to unfocus"
				placeholder="Filter"
				onChange={ this.handleSearch }
				value={ jetsSearch } />

				<div id="jetsContent" className="List List--repos">
					{ repos.map((repo, i) => <Repo key={i} repo={repo} />) }
				</div>
			</div>
		)
	}
}

export default withScrollTop(Repos);
