import React, { Component } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

class CityDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			camera: null
		};
	}
	componentDidMount() {
		api.getCamera(this.props.match.params.cityId).then(res => {
			console.log(res);
			this.setState({
				camera: res
			});
		});
	}
	render() {
		const camera = this.state.camera;
		return (
			this.state.camera && (
				<div
					className="container-fluid"
					id="cityDetail"
					style={{
						backgroundImage: `url(${camera.lastPhoto})`,
						height: "85vh"
					}}
				>
					<div className="heading-cityDetail">
						<h1>{camera.location.title}</h1>
						<i>Colors given by RGB</i>
					</div>

					<div className="container colors">
						<div className="row">
							{camera.palette.Vibrant && (
								<div className="col-lg-3 card-title-detail">
									<h3>Vibrant</h3>
									{camera.palette.Vibrant._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}

							{camera.palette.LightVibrant && (
								<div className="col-lg-3 card-title-detail">
									<h3>LightVibrant</h3>
									{camera.palette.LightVibrant._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}

							{camera.palette.DarkVibrant && (
								<div className="col-lg-3 card-title-detail">
									<h3>DarkVibrant</h3>
									{camera.palette.DarkVibrant._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}

							{camera.palette.Muted && (
								<div className="col-lg-3 card-title-detail">
									<h3>Muted</h3>
									{camera.palette.Muted._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}

							{camera.palette.LightMuted && (
								<div className="col-lg-3 card-title-detail">
									<h3>LightMuted</h3>
									{camera.palette.LightMuted._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}

							{camera.palette.DarkMuted && (
								<div className="col-lg-3 card-title-detail">
									<h3>DarkMuted</h3>
									{camera.palette.DarkMuted._rgb.map((e, i) => {
										return <p>{e} </p>;
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			)
		);
	}
}

export default CityDetail;
