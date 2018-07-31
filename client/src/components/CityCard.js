import React, { Component } from "react";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import rgbHex from "../rgb-hex";
// http://c0bra.github.io/color-scheme-js/

class CityCard extends Component {
	render() {
		// filter color with at least 1 population
		let palette = _.values(this.props.city.palette).filter(e => {
			if (e) {
				e._population > 0;
				return e;
			}
		});
		// get the dominant color
		let pop = 0;
		let rgb = [];
		for (let i = 0; i < palette.length; i++) {
			if (palette[i]._population > pop) {
				pop = palette[i]._population;
				rgb = palette[i]._rgb;
			}
		}

		// convert hexa
		let kgb = palette.map(rgb => {
			return rgbHex(...rgb._rgb);
		});

		let color = "";
		if (kgb.length > 2) {
			color = `linear-gradient(to right, #${kgb[0]}, #${kgb[1]} )`;
		} else {
			color = `linear-gradient( #${kgb[0]}, white )`;
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
						background: `${color}`,
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
						>
							{`#${kgb[0]}`}
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default CityCard;
