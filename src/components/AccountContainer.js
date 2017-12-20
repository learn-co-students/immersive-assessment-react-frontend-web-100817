import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: null
  };

  getTransactions() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(results => this.setState({ transactions: results }));
  }

  componentDidMount() {
    this.getTransactions();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
