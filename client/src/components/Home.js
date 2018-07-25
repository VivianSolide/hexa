import React, { Component } from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import logo from "../logo.png";

import CityList from "./CityList";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ""
		};
	}
	handleChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}
	render() {
		return (
			<div>
				<header className="App-header">
					<a href="/">
						<img src={logo} className="App-logo" alt="logo" />
					</a>
					<h1 className="App-title">Hexaco</h1>
					<p>Catch the colors of the sky, live</p>
				</header>
				<Searchbar
					changeSearch={this.handleChange.bind(this)}
					searchText={this.state.searchText}
				/>
				<CityList searchText={this.state.searchText} />
				<p>
					Made by
					<a href="https://www.linkedin.com/in/ignaciolopezsanchez/"> Nacho </a>
					&
					<a href="https://www.linkedin.com/in/viviansarazin/"> Vivian </a>
					at
					<a href="https://www.instagram.com/ironhackber/"> Ironhack Berlin.</a>
				</p>
			</div>
		);
	}
}

export default Home;
