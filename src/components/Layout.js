import React, {Component} from 'react'
export default class Layout extends Component {

  render () {
    let headerStyle = {
      textAlign: 'center',
      height: '10vw',
      color: '#fff',
      backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MarsPanoramaa.jpg/2560px-MarsPanoramaa.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'decorative'
    }

    return (
      <div className='container-fluid nav'>
        <nav className='row'>
          <div className='col-md-12 header'>
            <div className='header-title' style={headerStyle}>
              <h1>Mars Rover Photo App</h1>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          <h4>An Alexhmonty design</h4>
        </footer>
      </div>
    )
  }
}
