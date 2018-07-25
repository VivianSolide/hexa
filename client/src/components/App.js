import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import CityDetail from "./CityDetail";
import AddCountry from "./AddCountry";
import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
import api from "../api";
import logo from "../logo.png";
import "./App.css";
import { Button } from "reactstrap";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		};
		api.loadUser();
	}

	handleLogoutClick(e) {
		api.logout();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Hexaco</h1>
				</header>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/city/:cityId" component={CityDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
