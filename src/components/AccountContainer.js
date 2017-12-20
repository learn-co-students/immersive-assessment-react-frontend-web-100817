import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state={
      transactions:[],
      searchTerm: ""
  }

  getData = () => {
    this.setState({transactions: transactions})
  }

  componentDidMount=() => {
    this.getData()
  }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API



  handleSearch = (searchTerm) => {
   return this.setState({searchTerm: searchTerm})
  }


//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");

  render() {
    console.log(this.state)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <TransactionsList transactions={[...this.state.transactions]} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
