import React from 'react'

const Transaction = (props) => {
  console.log('transaction',props)
  const transactionList = props.transactions.map(transaction=>{
    return (
      <tr>
        <td>{transaction.posted_at}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    )
  })
  console.log('transactionList',transactionList)
  return transactionList

}

export default Transaction
