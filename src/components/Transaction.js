import React from 'react'

const Transaction = (props) => {

  const eachTransaction = props.transactions.map((trans, index) => {
    return (
        <div key={index}>
          <tr>
            <td>{trans.posted_at}</td>
            <td>{trans.description}</td>
            <td>{trans.category}</td>
            <td>{trans.amount}</td>
          </tr>
        </div>
    )
  }
      )

  if (!props.searchTerm) {
    return (

      <div>
        <tr>
          <td>{eachTransaction}</td>
        </tr>

      </div>

    )
  }
  findTransaction = (t) => {
    return t === props.transactions.description
  }

  const searchTransaction = props.transactions.find(findTransaction)
  return (
    <div>
      <p>searchTransaction</p>
    </div>
  )
}

export default Transaction
