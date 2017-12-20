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
    this.state = {
      transactions: [],
      searchTerm: '',
    }

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res => res.json()).then(response => this.setState({transactions: response}))
  }


  handleChange(event) {
    let unfiltered = this.state.transactions;
    let filitered = unfiltered.filter( (trans) => (trans.description.includes(event) || trans.category.includes(event)))
    this.setState({
      searchTerm: event.target.value,
      transactions: filitered
    })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
