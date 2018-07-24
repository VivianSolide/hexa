import React, { Component } from "react";
import "./App.css";
import Searchbar from "./Searchbar";
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
			<div className="">
				<Searchbar
					changeSearch={this.handleChange.bind(this)}
					searchText={this.state.searchText}
				/>
				<CityList searchText={this.state.searchText} />
			</div>
		);
	}
}

export default Home;
