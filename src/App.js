import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       Hello, buddy!
    //     </p>
    //   </div>
    // );

    return (
      <AppBar title='React Toolbox' leftIcon='menu'>
        <Navigation type='horizontal'>
          <Link href='http://' label='Inbox' icon='inbox' />
          <Link href='http://' active label='Profile' icon='person' />
        </Navigation>
      </AppBar>
    )
  }
}

export default App
