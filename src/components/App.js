import React, { Component } from 'react';
import AccountContainer from './AccountContainer';

import '../stylesheets/App.css';

class App extends Component {
  state = {
    transactions: [],
    filter: ''
  };

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions =>
        this.setState({
          transactions: transactions
        })
      );
  }

  changeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    console.log(this.state.filter);
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer
          searchTerm={this.state.filter}
          transactions={this.state.transactions}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}

export default App;
