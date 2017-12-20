import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: this.props.transactions,
    searchTerm: "",
    selectedTransaction: null
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleClick = event => {
    this.setState({ selectedTransaction: event.target.id });
  };

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList
          selectedTransaction={this.state.selectedTransaction}
          handleClick={this.handleClick}
          transactions={this.props.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
