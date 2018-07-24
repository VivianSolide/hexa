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
					{/* <Link to="/">Home</Link>
					<Link to="/countries">Countries</Link>
					<Link to="/add-country">Add country</Link>
					{!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
					{!api.isLoggedIn() && <Link to="/login">Login</Link>}
					{api.isLoggedIn() && (
						<Link to="/" onClick={e => this.handleLogoutClick(e)}>
							Logout
						</Link>
					)}
					<Link to="/secret">Secret</Link> */}
				</header>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/city/:cityId" component={CityDetail} />
					{/* <Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/secret" component={Secret} />
					<Route render={() => <h2>404</h2>} /> */}
				</Switch>
			</div>
		);
	}
}

export default App;
