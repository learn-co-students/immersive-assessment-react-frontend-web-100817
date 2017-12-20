import React from 'react';

class Transaction extends React.Component {
  render() {
    const transaction = this.props.transaction;
    return (
      <tr>
        <td>{transaction.posted_at}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  }
}

export default Transaction;
