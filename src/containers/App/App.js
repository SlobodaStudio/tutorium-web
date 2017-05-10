import React, { Component } from 'react'

import TopBar from 'containers/top_bar/TopBar'
import MainArea from 'containers/MainArea/MainArea'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <MainArea />
      </div>
    )
  }
}

export default App
