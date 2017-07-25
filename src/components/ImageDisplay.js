import React, { Component } from 'react'

export default class ImageDisplay extends Component {

  render () {
    // let photos = this.props.photos

    return (
      <div className='photo-display'>
        {this.props.photos.map((photo) =>
          <div key={photo.id}>
            <h2>Photo: {photo.id}</h2>
            <img src={photo.img_src} alt='photo from rover' />
          </div>
      )}
      </div>
    )
  }
}
