import React from 'react';
import TransactionsList from  './TransactionsList'
import Search from './Search'

class AccountContainer extends React.Component {

  state = {
    transactions: [],
  }

  displayData = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => this.setState({ transactions: data}))
  }

  componentDidMount() {
    this.displayData()
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div>Hey!</div>
        <Search />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer;


// import React, { Component } from 'react'
// import TransactionsList from './TransactionsList'
// import Search from './Search'
// import {transactions} from '../transactionsData'
//
// class AccountContainer extends Component {
//
//   constructor() {
//     super();
//
//     // get a default state working with the data imported from TransactionsData
//     // use this to get the functionality working
//     // then replace the default transactions with a call to the API
//
//     this.state = {
//       transactions: {transactions}
//     }
//   }
//
//   // state = {
//   //    transactions: []
//   //  }
//
//   // getData = () => {
//   //   fetch('https://boiling-brook-94902.herokuapp.com/transactions')
//   //     .then(res => res.json())
//   //     .then(data => this.setState({ transactions: data }))
//   // }
//   //
//   // componentDidMount() {
//   //   this.getData();
//   // }
//
//
//   handleChange(event) {
//     // your code here
//   }
//
//   render() {
// // console.log(this.state)
//     return (
//       <div>
//         <Search searchTerm={"...add code here..."} handleChange={"...add code here..."} />
//         <TransactionsList transactions={this.state.transactions} searchTerm={"...add code here..."} />
//       </div>
//     )
//   }
// }
//
// export default AccountContainer
