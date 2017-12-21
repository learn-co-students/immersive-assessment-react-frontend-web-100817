import React from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends React.Component {

  state = {
    searchTerm: '',
    transactions:[{id: 'Loading...', posted_at: 'Loading...', description: 'Loading...', category: 'Loading...', amount: 'Loading...'}]
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => this.setState({transactions: json}))
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
