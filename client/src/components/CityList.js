import React, { Component } from "react";
import api from "../api";
import CityCard from "./CityCard";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

class CityList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cameras: null
		};
	}
	componentDidMount() {
		api.getCameras().then(res => {
			this.setState({
				cameras: res
			});
		});
	}

	render() {
		console.log(this.state);
		return (
			this.state.cameras && (
				<div className="container">
					<div className="row">
						{this.state.cameras
							.filter(camera => {
								return camera.location.title
									.toLowerCase()
									.includes(this.props.searchText.toLowerCase());
							})
							.map((camera, i) => (
								<div key={camera._id} className="col-3">
									<Link to={`/city/${camera._id}`}>
										<CityCard city={camera} />
									</Link>
								</div>
							))}
					</div>
				</div>
			)
		);
	}
}

export default CityList;