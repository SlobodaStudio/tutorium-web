import React, { Component } from 'react'

import StatefulTopBar from 'containers/stateful_top_bar/StatefulTopBar'
import MainArea from 'containers/main_area/MainArea'

class App extends Component {
  render() {
    return (
      <div>
        <StatefulTopBar />
        <MainArea />
      </div>
    )
  }
}

export default App
