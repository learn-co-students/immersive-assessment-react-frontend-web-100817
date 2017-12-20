import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      searchTerm: '',
      transactions: []
    }

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res => res.json()).then(transactions => this.setState({transactions}))
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.search} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
