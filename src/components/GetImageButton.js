import React, { Component } from 'react'

export default class GetImageButton extends Component {
  render () {
    return (
      <div>
        <button className='button' onClick={this.props.onClick}>Get Rover Image</button>
      </div>
    )
  }
}
