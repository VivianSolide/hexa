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
			camera &&
			camera.lastPhoto && (
				<div
					className="container-fluid"
					id="cityDetail"
					style={{
						backgroundImage: `url(${camera.lastPhoto})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						height: "100vh"
					}}
				>
					<div className="button-cityDetail">
						<a href="/">
							<button className="btn btn-primary">Home</button>
						</a>
					</div>

					<div className="heading-cityDetail">
						<h1>{camera.location.title}</h1>
					</div>

					<div className="container colors">
						<div className="row">
							{camera.palette.Vibrant && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.Vibrant._rgb[0]},${
												camera.palette.Vibrant._rgb[1]
											},${camera.palette.Vibrant._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${camera.palette.Vibrant._rgb[0]},${
												camera.palette.Vibrant._rgb[1]
											},${camera.palette.Vibrant._rgb[2]})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">Vibrant</h3>
										{camera.palette.Vibrant._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}

							{camera.palette.LightVibrant && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.LightVibrant._rgb[0]},${
												camera.palette.LightVibrant._rgb[1]
											},${camera.palette.LightVibrant._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${
												camera.palette.LightVibrant._rgb[0]
											},${camera.palette.LightVibrant._rgb[1]},${
												camera.palette.LightVibrant._rgb[2]
											})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">LightVibrant</h3>
										{camera.palette.LightVibrant._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}

							{camera.palette.DarkVibrant && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.DarkVibrant._rgb[0]},${
												camera.palette.DarkVibrant._rgb[1]
											},${camera.palette.DarkVibrant._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${
												camera.palette.DarkVibrant._rgb[0]
											},${camera.palette.DarkVibrant._rgb[1]},${
												camera.palette.DarkVibrant._rgb[2]
											})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">DarkVibrant</h3>
										{camera.palette.DarkVibrant._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}

							{camera.palette.Muted && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.Muted._rgb[0]},${
												camera.palette.Muted._rgb[1]
											},${camera.palette.Muted._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${camera.palette.Muted._rgb[0]},${
												camera.palette.Muted._rgb[1]
											},${camera.palette.Muted._rgb[2]})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">Muted</h3>
										{camera.palette.Muted._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}

							{camera.palette.LightMuted && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.LightMuted._rgb[0]},${
												camera.palette.LightMuted._rgb[1]
											},${camera.palette.LightMuted._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${
												camera.palette.LightMuted._rgb[0]
											},${camera.palette.LightMuted._rgb[1]},${
												camera.palette.LightMuted._rgb[2]
											})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">LightMuted</h3>
										{camera.palette.LightMuted._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}

							{camera.palette.DarkMuted && (
								<div className="col-lg-3 col-6 card">
									<div
										onClick={() => {
											let text = `rgb(${camera.palette.DarkMuted._rgb[0]},${
												camera.palette.DarkMuted._rgb[1]
											},${camera.palette.DarkMuted._rgb[2]})`;
											const el = document.createElement("textarea");
											el.value = text;
											document.body.appendChild(el);
											el.select();
											document.execCommand("copy");
											document.body.removeChild(el);
											alert(text + " clipped in your clipboard");
										}}
										className="card-color"
										style={{
											backgroundColor: `rgb(${
												camera.palette.DarkMuted._rgb[0]
											},${camera.palette.DarkMuted._rgb[1]},${
												camera.palette.DarkMuted._rgb[2]
											})`
										}}
									/>

									<div className="card-body">
										<h3 className="card-title">DarkMuted</h3>
										{camera.palette.DarkMuted._rgb.map((e, i) => {
											return <p className="card-text">{Math.floor(e)} </p>;
										})}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* <div className="container">
						<div className="row">
							<div className="buttons">
								<div className="button-cityDetail-previous">
									<a href="/">
										<button className="btn btn-danger">Previous</button>
									</a>
								</div>
								<div className="button-cityDetail-next">
									<a href="/">
										<button className="btn btn-success">Next</button>
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			)
		);
	}
}

export default CityDetail;
