import React from 'react'

import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'

import styles from './TopBar.scss'
import logoImg from './sloboda-logo.png'

export default function TopBar() {
  const SlobodaLogo = () => <img src={logoImg} className={styles.slobodaLogo} alt="logo" />
  return (
    <AppBar title="Tutorium" leftIcon={<SlobodaLogo />}>
      <Navigation type="horizontal">
        <Link href="#" label="Login" icon="exit_to_app" className={styles.menuLink} />
        <Link href="#" label="Register" icon="account_circle" className={styles.menuLink} />
      </Navigation>
    </AppBar>
  )
}
