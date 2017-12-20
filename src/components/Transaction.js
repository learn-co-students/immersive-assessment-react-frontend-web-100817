import React from "react";
import TransactionComents from "./TransactionComments";

const Transaction = props => {
  const { transaction } = props;
  return transaction.id === props.selectedTransaction ? (
    <tr onClick={props.handleClick}>
      <td id={props.id}>{transaction.posted_at}</td>
      <td id={props.id}>{transaction.description}</td>
      <td id={props.id}>{transaction.category}</td>
      <td id={props.id}>{transaction.amount}</td>
    </tr>
  ) : (
    <tr onClick={props.handleClick}>
      <td id={props.id}>{transaction.posted_at}</td>
      <td id={props.id}>{transaction.description}</td>
      <td id={props.id}>{transaction.category}</td>
      <td id={props.id}>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
