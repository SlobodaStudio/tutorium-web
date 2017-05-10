import React, { Component } from 'react'

import TopBar from 'containers/top_bar/TopBar'
import Events from 'containers/Events/Events'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Events />
      </div>
    )
  }
}

export default App
