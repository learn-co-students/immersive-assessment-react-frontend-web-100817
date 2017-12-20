import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: null
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(dat => this.setState({transactions: dat}))
  }


  handleChange = (event) => {
    return(
    this.setState({
      searchTerm: event.target.value})
    )
  }
  

  render() {
    return (
      <div>
        <Search searchTerm={"...add code here..."} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={"...add code here..."} />
        
      </div>
    )
  }
}

export default AccountContainer
