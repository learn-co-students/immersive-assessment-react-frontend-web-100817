import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: this.props.transactions,
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList
          transactions={this.props.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
