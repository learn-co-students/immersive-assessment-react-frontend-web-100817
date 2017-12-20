import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {
  const { transactions } = props;
  const transactionSearched = transactions.map(transaction => {
    if (
      transaction.description.toLowerCase().includes(props.searchTerm) ||
      transaction.category.toLowerCase().includes(props.searchTerm)
    ) {
      return (
        <Transaction
          selectedTransaction={props.selectedTransaction}
          id={transaction.id}
          handleClick={props.handleClick}
          key={transaction.id}
          transaction={transaction}
        />
      );
    }
  });
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionSearched}
      </tbody>
    </table>
  );
};

export default TransactionsList;
