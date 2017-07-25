import React, { Component } from 'react'

export default class GetImageButton extends Component {
  render () {
    return (
      <div className='get-image-button'>
        <button className='btn btn-primary' onClick={this.props.onClick}>Get Rover Image</button>
      </div>
    )
  }
}
