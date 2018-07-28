import React, { Component } from "react";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
// http://c0bra.github.io/color-scheme-js/

class CityCard extends Component {
	render() {
		let palette = _.values(this.props.city.palette).filter(e => {
			return e;
		});
		let pop = 0;
		let rgb = [];
		for (let i = 0; i < palette.length; i++) {
			if (palette[i]._population > pop) {
				pop = palette[i]._population;
				rgb = palette[i]._rgb;
			}
		}
		return (
			<div
				className="card"
				style={{
					maxHeight: "40vh"
				}}
			>
				<div
					className="card-img-top"
					style={{
						backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
						height: "20vh"
					}}
				/>
				<div className="card-body" style={{ height: "100%" }}>
					<h3 className="card-title">{this.props.city.location.title}</h3>
					<div className="card-text">
						<h5
							style={{
								color: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
							}}
						>{`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default CityCard;
