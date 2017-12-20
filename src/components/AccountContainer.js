import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(res => {
        this.setState({ transactions: res });
      });
  }

  handleChange = e => {
    // your code here
    const searchTerm = e.target.value
    this.setState(prevState => (
      {
        ...prevState,
        searchTerm
      }
    ))
  }

  render() {
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
