import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      searchTerm: "",
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(data => data.json())
    .then(data => this.setState({
      transactions: data
    }))
    console.log(this.state.transactions)
  }


  handleChange(event) {
    // your code here
    event.preventDefault();
    let change = event.target.value
    this.setState({
      searchTerm: change
    })
    console.log(this.state.searchTerm);
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
