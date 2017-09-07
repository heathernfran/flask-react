import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      center: [28.44, -80.56],
      zoom: 5,
    }
  }
  
  componentWillMount() {
    return fetch('https://launchlibrary.net/1.2/pad/launch%20complex')
            .then((response) => response.json())
            .then((json) => {
              console.log(json)
              this.setState({
                data: json.pads
              })
            })
            .catch((error) => {
              console.error(`Error in response: ${error}`)
            })
  }
  
  // Round results for latitude and longitude coordinates
  _roundCoordinates(val) {
    return Math.round(val * 1000) / 1000
  }
  
  render() {
    const styles = {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
    return (
      <div>
        <h1>Launch Library API</h1>
        <div>
          <Map
            style={styles}
            center={this.state.center}
            zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            {this.state.data.map((value) => {
              let lat = this._roundCoordinates(value.latitude), 
                  lng = this._roundCoordinates(value.longitude)
              return (
                <Marker 
                  key={value.id}
                  position={[lat, lng]}>
                  <Popup>
                    <span>{value.name}</span>
                  </Popup>
                </Marker>
              )
            })}
          </Map>
        </div>
      </div>
    )
  }
}
