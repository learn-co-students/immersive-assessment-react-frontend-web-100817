import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
//import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = { transactions: [], searchTerm: "", filteredTransactions: [] };

  getTransactionData = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(json =>
        this.setState({ transactions: json, filteredTransactions: json })
      );
  };

  componentDidMount() {
    this.getTransactionData();
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
    this.filterTransactions();
  };

  filterTransactions = () => {
    let newTransactions = this.state.transactions.slice();
    this.setState(prevState => {
      return {
        filteredTransactions: newTransactions.filter(t => {
          return (
            t.description
              .toLowerCase()
              .match(prevState.searchTerm.toLowerCase()) ||
            t.category.toLowerCase().match(prevState.searchTerm.toLowerCase())
          );
        })
      };
    });
  };

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList transactions={this.state.filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
