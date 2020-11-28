import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

class Navbar extends Component {
	state = {
		isOpen: false
	};

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<nav id="Nav">
					<div className="logoBtn">
						<div className="logo">
							<a href="/">
								<img src={logo} alt="s" />
							</a>
						</div>

						<div className="btn" onClick={this.handleClick}>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
					</div>
					<div className="menuItems">
						<ul
							className={
								this.state.isOpen ? "showNav" : "undefined"
							}
						>
							<li>
								<NavLink exact activeStyle={{ color: "red" }} to="/">Home</NavLink>
							</li>
							<li>
								<NavLink exact activeStyle={{ color: "red" }} to="/about">About</NavLink>
							</li>
							<li>
								<NavLink exact activeStyle={{ color: "red" }} to="/contact">Contact</NavLink>
							</li>
							<li>
								<NavLink exact activeStyle={{ color: "red" }} to="/portfolio">Portfolio</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
