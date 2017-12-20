import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  // debugger;
  // console.log(props)
  function onTrans() {
    console.log(props.transactions)
    return props.transactions.map((tran, i) => {
      // console.log(tran);
      return (
        <Transaction key={i} transaction={tran} />
      )
    })
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {onTrans()}

      </tbody>
    </table>
  )
}

export default TransactionsList
