import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
// import { transactions } from '../transactionsData';

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: []
    };

    console.log(Search.state);
  }

  componentDidMount() {
    this.storeTransactions();
  }

  storeTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => response.json())
      .then(transactions => this.setState({ transactions }));
  };

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <Search searchTerm={'test'} handleChange={this.handleChange} />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={'dunno'}
        />
      </div>
    );
  }
}

export default AccountContainer;
