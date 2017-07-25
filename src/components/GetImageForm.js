import React, { Component } from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
const API_KEY = 'DKY79zFg64LiRdfXCvlMvXhy1sxBBVChoA4IUdOq'

export default class GetImageForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rover: 'Curiosity',
      camera: 'fhaz',
      sol: '',
      photos: []
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this)
    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)
  }

  handleRover (event) {
    this.setState({rover: event.target.value})
  }

  handleCamera (event) {
    this.setState({camera: event.target.value})
  }

  handleSol (event) {
    this.setState({sol: event.target.value})
  }

  fetchRoverImage (event) {
    // event.preventDefault() // TODO: Make sure this isn't the problem!!!!
    console.log(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`)
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
      this.setState({
        photos: responseData.photos
      })
    })
    .catch(function (error) {
      console.log('error: ' + error)
    })
    console.log(this.state.photos)
  }

  render () {
    return (
      <div>
        <form>
          <label htmlFor='rover'>Rover</label>
          <select onChange={this.handleRover} id='rover' value={this.state.value}>
            <option value='Curiosity'>Curiosity</option>
            <option value='Opportunity'>Opportunity</option>
            <option value='Spirit'>Spirt</option>
          </select>
          <label htmlFor='camera'>Camera Type</label>
          <select onChange={this.handleCamera} id='camera' value={this.state.value}>
            <option value='fhaz'>FHAZ (Front Hazard)</option>
            <option value='rhaz'>RHAZ (Rear Hazard)</option>
            <option value='navcam'>NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor='sol'>Martian Sol: 1000-2000</label>
          <input type='number' onChange={this.handleSol} max='2000' min='1000' value={this.state.value} />
        </form>
        <GetImageButton onClick={this.fetchRoverImage} />
        <ImageDisplay photos={this.state.photos} />
      </div>
    )
  }
}
