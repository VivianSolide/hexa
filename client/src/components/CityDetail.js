import React, { Component } from 'react';
import api from "../api"
import 'bootstrap/dist/css/bootstrap.css';


class CityDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      camera: null
    }

  }
  componentDidMount() {
    api.getCamera(this.props.match.params.cityId)
      .then(res => {
        console.log(res)
        this.setState({
          camera: res
        });

      });
  }
  render() { 
    // const padding={padding:"10px"}
    const camera = this.state.camera;
    console.log('camera   ', camera)
    return (
      this.state.camera && <div className="container">
        <h1>{camera.location.title}</h1>
        <img className="img-fluid" src={camera.lastPhoto} alt="Responsive image"/>
        <div className="row">
              {/* {pokemon.types.map((e, i) => {
                return <p key={i} style={padding}>{e.type.name}  </p>
              })}
              <h2>#{pokemon.id}</h2> */}
            </div>
        <div className="row">
          <div className="col-6" >
            {/* <img src={pokemon.sprites.front_default} alt=""/> */}
          </div>
          <div className="col-6">
          {/* {pokemon.stats.map((e, i) => {
                return (<div  key={i} className="row">
                  <p>{e.stat.name}  {e.base_stat}</p>
                </div>)
              })} */}

          </div>
        </div>



      </div>
    );
  }
}

export default CityDetail;