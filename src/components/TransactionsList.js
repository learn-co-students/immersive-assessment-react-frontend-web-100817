import React from 'react'

const TransactionsList = props => {
  console.log('this is my props', props)
  const transaction = props.transactions.map( t => {
    return (
      <tr>
        <th>{t.posted_at}</th>
        <th>{t.description}</th>
        <th>{t.category}</th>
        <th>{t.amount}</th>        
      </tr>
    )
  })

  
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
        {!props.searchterm ? transaction : transaction.filter(t => t.category===props.searchterm)}

      </tbody>
    </table>
  )
}

export default TransactionsList
