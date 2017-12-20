import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      searchTerm: "",
      orderTerm: null
    }
  }

  //uses a lifecycle method to fetch data from our api
  componentWillMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(json => this.setState({
        transactions: json
      }))
  }

  //handles the sorting if a header is clicked, then sets the state to newly sorted
  //to pass down into our list
  handleClick = (id) => {
    let copy = this.state.transactions.slice()
    copy.sort((a, b) => {
        if(a[id] < b[id]){
            return -1;
        }else if(a[id] > b[id]){
            return 1;
        }
        return 0;
    })
    this.setState({transactions: copy})
  }

  //sets our state everytime a letter is added or removed from search bar
  handleChange = (value) => {
    this.setState({searchTerm: value})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default AccountContainer
