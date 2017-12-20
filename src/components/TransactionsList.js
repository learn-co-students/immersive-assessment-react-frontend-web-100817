import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  //filters all the transactions and only makes Transaction components out of the ones that match
  function transactionRows() {
    const filtered = props.transactions.filter(t => t.description.toLowerCase().match(props.searchTerm.toLowerCase()) || t.category.toLowerCase().match(props.searchTerm.toLowerCase()))
    return filtered.map(t => <Transaction key={t.id} transaction={t} />)
  }

  //pulled out the headers to add sorting icons and onClick methods
  function tableHeaders() {
    const headings = ['Description', 'Category', 'Amount']
    return headings.map(h =>  {
      return (
        <th key={h}>
          <h3 className="ui center aligned header">
            {h}
            <i id={h} className="angle up link icon" onClick={(e) => props.handleClick(e.target.id.toLowerCase())}></i>
          </h3>
        </th>
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
          {tableHeaders()}
        </tr>
        {transactionRows()}
      </tbody>
    </table>
  )
}

export default TransactionsList
