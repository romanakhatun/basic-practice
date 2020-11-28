import React, { Component } from "react";

class Textarea extends Component {
	constructor() {
		super();
		this.state = {
			description: "please speak your mind.",
			userValue: ""
		};
	}
	onChangeHandler = event => {
		var newValue = event.target.value;
		this.setState({ userValue: newValue });
	};
	render() {
		return (
			<div>
				<h2>
					<small>--Text Area--</small>
				</h2>
				<textarea value={this.state.description} />
				<br />
				<h4>
					<small>Your Speak: {this.state.userValue}</small>
				</h4>
				<textarea
					onChange={this.onChangeHandler}
					placeholder="please write your mind"
				/>
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default Textarea;
