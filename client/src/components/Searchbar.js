import React, { Component } from "react";

class Searchbar extends Component {
	// constructor(props){
	//   super(props)

	// }
	render() {
		return (
			<div>
				<label htmlFor="" />
				<input
					className="form-control"
					type="text"
					onChange={this.props.changeSearch}
					value={this.props.searchText}
					placeholder="Choose your city"
				/>
			</div>
		);
	}
}

export default Searchbar;
