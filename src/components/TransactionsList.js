import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = (props) => {

  const remove = (array, element) => {
      const index = array.indexOf(element);

      if (index !== -1) {
          array.splice(index, 1);
      }
  }

  const transactionFilter = () => {
    let fT = props.transactions.filter(t => ( t.description.toLowerCase().match(props.searchTerm.toLowerCase()) || t.category.toLowerCase().match(props.searchTerm.toLowerCase())))

    return fT
  }

  const transactionMap = () => {
    return transactionFilter().map(t => <Transaction key={t.id} transaction={t}/>)
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

        {transactionMap()}

      </tbody>
    </table>
  )
}

export default TransactionsList
