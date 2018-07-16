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
        
      {camera.palette.Vibrant && <div className="row">
        <div className="row">
          <h3>Vibrant</h3>
        </div>

        <div className="row">
          <ul>
          <h4>rgb</h4>
  
            {
              camera.palette.Vibrant._rgb.map((e, i) => {
                return <p>{e}</p>
              })
  
            }
          </ul>
        </div>
        <br/>

        <h4>{camera.palette.Vibrant._population}</h4>

        <ul>
        <h4>hsl</h4>

          {
            camera.palette.Vibrant._hsl.map((e, i) => {
              return <p>{e}</p>
            })

          }
        </ul>
      </div>}
        {camera.palette.LightVibrant && <div className="row">
          <h3>LightVibrant</h3>

          <ul>
          <h4>rgb</h4>

            {
              camera.palette.LightVibrant._rgb.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
          <br/>

          <h4>{camera.palette.LightVibrant._population}</h4>

          <ul>
          <h4>hsl</h4>

            {
              camera.palette.LightVibrant._hsl.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
        </div>}

 {camera.palette.DarkVibrant && <div className="row">
          <h3>DarkVibrant</h3>

          <ul>
          <h4>rgb</h4>

            {
              camera.palette.DarkVibrant._rgb.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
          <h4>{camera.palette.DarkVibrant._population}</h4>

          <ul>
          <h4>hsl</h4>

            {
              camera.palette.DarkVibrant._hsl.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
        </div>}
       { camera.palette.Muted && <div className="row">
          <h3>Muted</h3>

          <ul>
          <h4>rgb</h4>

            {
              camera.palette.Muted._rgb.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
          <h4>{camera.palette.Muted._population}</h4>

          <ul>
          <h4>hsl</h4>

            {
              camera.palette.Muted._hsl.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
        </div>}

          {camera.palette.LightMuted && <div className="row">
          <h3>LightMuted
          </h3>

          <ul>
          <h4>rgb</h4>

            {
              camera.palette.LightMuted._rgb.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
          <br/>

          <h4>{camera.palette.LightMuted._population}</h4>

          <ul>
          <h4>hsl</h4>

            {
              camera.palette.LightMuted._hsl.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
        </div>}
        { camera.palette.DarkMuted && <div className="row">
          <h3>DarkMuted
          </h3>
          <h4>rgb</h4>

          <ul>
            {
              camera.palette.DarkMuted._rgb.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
          <br/>

          <h4>{camera.palette.DarkMuted._population}</h4>

          <ul>
          <h4>hsl</h4>

            {
              camera.palette.DarkMuted._hsl.map((e, i) => {
                return <p>{e}</p>
              })

            }
          </ul>
        </div>}

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