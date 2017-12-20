import React from 'react';
import Transaction from './Transaction';

class TransactionsList extends React.Component {
  render() {
    const searchTerm = this.props.searchTerm;
    const transactions = this.props.transactions.filter(transaction => {
      return (
        transaction.category.toLowerCase().includes(searchTerm) ||
        transaction.description.toLowerCase().includes(searchTerm)
      );
    });
    const myTrans = transactions.map((transaction, i) => {
      return <Transaction key={i} transaction={transaction} />;
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

          {myTrans}
        </tbody>
      </table>
    );
  }
}

export default TransactionsList;
