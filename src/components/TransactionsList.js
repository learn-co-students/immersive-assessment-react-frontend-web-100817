import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions, searchTerm }) => {
  let filteredTransactions;
  if (searchTerm) {
    filteredTransactions = transactions.filter(
      t =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredTransactions = transactions;
  }
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
        {filteredTransactions.map(t => <Transaction data={t} />)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
