import React, { Component } from "react";

class Multipulform extends Component {
	constructor() {
		super();
		this.state = {
			fname: " ",
			lname: "",
			email: "",
			mobile: ""
		};
	}

	onChangeHandler = event => {
		var newProperty = event.target.name;
		var nawValue = event.target.value;
		this.setState({ [newProperty]: nawValue });

		if (newProperty === "fname") {
			// var namePattern = /^([a-zA-Z]){2,30}$/;
			var namePattern = /^[a-z\d]{5,12}$/i;
			if (!namePattern.test(nawValue)) {
				this.setState({ fname: "Your first name isn't correct" });
			}
		}

		if (newProperty === "lname") {
			var namePattern = /^[a-z\d]{5,12}$/i;
			if (!namePattern.test(nawValue)) {
				this.setState({ lname: "Your last name isn't correct" });
			}
		}

		if (newProperty === "email") {
			var emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
			if (!emailPattern.test(nawValue)) {
				this.setState({ email: "Your email address is incorrect" });
			}
		}

		if (newProperty === "mobile") {
			if (!Number(nawValue)) {
				this.setState({ mobile: "Your mobile no is incorrect" });
			}
		}

	};
	render() {
		return (
			<div>
				<h2>
					<small>--Your Form Validation--</small>
				</h2>
				<h4>
					<small>First Name:<span style={{ color: "red" }}>{this.state.fname}</span></small>
				</h4>
				<h4>
					<small>Last Name:{this.state.lname}</small>
				</h4>
				<h4>
					<small>Email:{this.state.email}</small>
				</h4>
				<h4>
					<small>Mobile:{this.state.mobile}</small>
				</h4>
				<form>
					<input name="fname" onChange={this.onChangeHandler} type="text" placeholder="First Name" />
					<br />
					<br />
					<input
						name="lname"
						onChange={this.onChangeHandler}
						type="text"
						placeholder="Last Name"
					/>
					<br />
					<br />
					<input
						name="email"
						onChange={this.onChangeHandler}
						type="text"
						placeholder="Email"
					/>
					<br />
					<br />
					<input
						name="mobile"
						onChange={this.onChangeHandler}
						type="text"
						placeholder="Mobile"
					/>
					<br />
					<br />
				</form>
			</div>
		);
	}
}

export default Multipulform;
