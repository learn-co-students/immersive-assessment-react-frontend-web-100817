import React from "react";
// id: 1,
// posted_at: "2017-02-28 11:00:00",
// description: "Leather Pants, Gap co.",
// category: "Fashion",
// amount: -20000
class Transaction extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.transaction.posted_at}</td>
        <td>{this.props.transaction.description}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.amount}</td>
      </tr>
    );
  }
}

export default Transaction;
