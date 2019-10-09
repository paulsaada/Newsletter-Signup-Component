import React, { Component } from 'react';
import './title.css';

class Title extends Component {
	state = {}

	static defaultProps = {
		text: "join the list"
	}

	render() {
		return (
			<div>
				<h1 className="title">{this.props.text}</h1>
			</div >
		);
	}
}

export default Title;
