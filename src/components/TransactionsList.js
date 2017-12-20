import React from 'react';

class TransactionsList extends React.Component {

  displayTrans = () => {
    return this.props.transactions.map( (tran) => {
      return (
        <div>
          <h3>{tran}</h3>
        </div>
      )
    })
  }



  render() {
    console.log(this.props.transactions)
    return (
      <div>{this.displayTrans()}</div>
    )
  }
}

// import React from 'react'
// import Transaction from './transaction'
//
// class TransactionsList extends React.Component {
//
//   render() {
//     return (
//       <div>Hey!</div>
//     )
//   }
// }

// const TransactionsList = () => {
// class TransactionsList extends React.Component {
//
//   displayTransactions = () => {
//     return this.props.transactions.map( (trans) => {
//       return (
//         <div>trans.description</div>
//       )
//     })
//   }
//
//   render() {
//     console.log(this.props.transactions)
//   return (
//     <table className="ui celled striped padded table">
//       <tbody>
//         <tr>
//           <th>
//             <h3 className="ui center aligned header">
//               Posted At
//             </h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">
//               Description
//             </h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">
//               Category
//             </h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">
//               Amount
//             </h3>
//           </th>
//         </tr>
//         <Transaction />
//       </tbody>
//     </table>
//   )
// }
// }

export default TransactionsList;
