import React, { Component } from 'react'
import Layout from './Layout'
import GetImageForm from './GetImageForm'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <GetImageForm />
        </Layout>
      </div>
    )
  }
}

export default App
