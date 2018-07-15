import React, { Component } from 'react';

class Searchbar extends Component {
  // constructor(props){
  //   super(props)
 
  // }
  render() {
    return (
      <div>
        <label htmlFor=""></label>
        <input type="text" onChange={this.props.changeSearch} value={this.props.searchText}/>
      </div>
    );
  }
}

export default Searchbar;