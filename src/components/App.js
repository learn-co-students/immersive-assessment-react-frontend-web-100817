import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui piled segment teal inverted">
          <h2>The Royal Bank of Flatiron</h2>
          <i className="payment icon"></i>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App
