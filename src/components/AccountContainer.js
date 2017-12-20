import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchQuery: ''
    }
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions => {
      return this.setState({transactions:transactions})
    })
  }

  handleSearchChange = (x) => {
    // this.setState({searchQuery:data})
    this.setState({searchQuery: x })
  }

  render() {
    // const filteredList = this.state.transactions.filter(transaction => {
    //     return transaction.description.includes(this.state.searchQuery) || transaction.category.includes(this.state.searchQuery) })
    return (
      <div>
        <Search searchQuery={this.state.searchQuery} handleSearchChange={this.handleSearchChange} />
        <TransactionsList transactions={this.state.transactions} searchQuery={this.state.searchQuery} />
      </div>
    )
  }
}

export default AccountContainer
