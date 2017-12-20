import React from "react";
import Transaction from "./Transaction";
// const Username = ({ username }) => <p>The logged in user is: {username}</p>;
class TransactionsList extends React.Component {
  render() {
    console.log(this.props.transactions);
    const searchTerm = this.props.searchTerm.toString().toLowerCase();
    console.log(searchTerm);
    const transactionsToRender = this.props.transactions.filter(transaction =>
      transaction.description.includes(searchTerm)
    );
    const transactionList = transactionsToRender.map(transaction => {
      return <Transaction transaction={transaction} />;
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
          {transactionList}
        </tbody>
      </table>
    );
  }
}

export default TransactionsList;
