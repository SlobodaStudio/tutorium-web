import React, { Component } from 'react'
import styles from './App.scss'

import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'
import logoImg from './sloboda-logo.png'


class App extends Component {
  render() {
    const SlobodaLogo = () => <img src={logoImg} className={styles.SlobodaLogo} alt='logo' />

    return (
      <AppBar title='Tutorium' leftIcon={<SlobodaLogo />}>
        <Navigation type='horizontal'>
          <Link href='http://' label='Inbox' icon='inbox' />
          <Link href='http://' active label='Profile' icon='person' />
        </Navigation>
      </AppBar>
    )
  }
}

export default App
