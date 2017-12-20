import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: transactions,
      searchTerm: ''
    }
  }

  componentDidMount(){
    this.fetchTransaction()
  }

  fetchTransaction = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(response=>response.json()).then(transactions => this.setState({transactions}))
  }
  handleChange = (event) => {
    event.preventDefault()
    this.setState({searchTerm: event.target.value}, this.filterTransactions)
  }

  filterTransactions = () => {
      let transactions = this.state.transactions.filter(transaction =>
      transaction.description.includes(event.target.value)
    )

    this.setState({transactions: transactions})
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
