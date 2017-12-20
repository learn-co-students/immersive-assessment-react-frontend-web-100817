import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(req => req.json())
      .then(json => this.setState({ transactions: json }));
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Testing:{this.state.searchTerm}</p>
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
