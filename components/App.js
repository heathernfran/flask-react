import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  
  componentDidMount() {
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
  
  render() {
    return (
      <div>
        <h1>Launch Library API</h1>
        {this.state.data.map((value) => {
          return (
            <div key={value.id}>
              {value.name}
              Latitude: {value.latitude}
              Longitude: {value.longitude}
            </div>
          )
        })}
      </div>
    )
  }
}
