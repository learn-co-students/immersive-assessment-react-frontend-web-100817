import React from 'react'
import Transaction from './Transaction'

class TransactionsList extends React.Component {

  render(){

    const filterSearch = (transactions, searchTerm) => {
      if (!searchTerm){}
      transactions.filter((transaction)=>{
        return transaction.description === searchTerm;
      })
    } else {return transactions}
    }

    console.log(this.props.transactions)
      const desiredTransactions = filterSearch(this.props.transactions, this.props.searchTerm)
      const listTransactions = desiredTransactions.map(transaction=>(
        <Transaction
          singleTransaction = {transaction}
        />
      )
    );

    return (
      <div>
        {listTransactions}
      </div>
    )
  }
}

export default TransactionsList
