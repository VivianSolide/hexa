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
					backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
					width: "100%",
					height: "33vh",
					marginBottom: "3vh"
				}}
			>
				<div className="card-body">
					<h5 className="card-title">{this.props.city.location.title}</h5>
					<h3 className="card-hexa" style={{ color: "red" }}>{`rgb(${rgb[0]},${
						rgb[1]
					},${rgb[2]})`}</h3>
				</div>
			</div>
		);
	}
}

export default CityCard;
