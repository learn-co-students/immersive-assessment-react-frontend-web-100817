import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state={
      transactions: [],
      searchTerm: "",
    }

  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions=> this.setState(transactions: transactions))
  }

  render() {

    // console.log('this state',this.state.searchTerm)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
