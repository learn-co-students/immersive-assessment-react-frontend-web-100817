import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search
          searchTerm={this.props.searchTerm}
          handleChange={this.props.changeFilter}
        />
        <TransactionsList
          transactions={this.props.transactions}
          searchTerm={this.props.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
