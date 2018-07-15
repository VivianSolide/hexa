import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CityCard extends Component {
  // constructor(props){
  //   super(props)

  // }
  render() {
    let primerStyle = { width: "18rem" }
    return (
      <div className="card" style={primerStyle}>
        <img className="card-img-top" src={this.props.city.lastPhoto} alt="jj" />
        <div className="card-body">
          <h5 className="card-title">{this.props.city.location.title}</h5>
        </div>
      </div>
    );
  }
}

export default CityCard;