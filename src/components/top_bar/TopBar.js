import React, { Component } from 'react'

import styles from './TopBar.scss'

import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'
import logoImg from './sloboda-logo.png'

class TopBar extends Component {
  navigation() {
    return (
      <Navigation type='horizontal'>
        <Link href='http://' label='Inbox' icon='inbox' />
        <Link href='http://' active label='Profile' icon='person' />
      </Navigation>
    )
  }
 
  render() {
    const SlobodaLogo = () => <img src={logoImg} className={styles.SlobodaLogo} alt='logo' />
    return (
      <AppBar title='Tutorium' leftIcon={<SlobodaLogo />}>
        { this.props.signedIn ? this.navigation() : null }
      </AppBar>
    )
  }
}

export default TopBar