import React, { Component } from 'react'
import './App.css'

import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'

class App extends Component {
  render() {
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
