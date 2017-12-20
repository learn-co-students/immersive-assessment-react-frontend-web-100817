import React from "react";
import TransactionComments from "./TransactionComments";

const Transaction = props => {
  const { transaction } = props;
  return transaction.id.toString() === props.selectedTransaction ? (
    <tr>
      <tr onClick={props.handleClick}>
        <td id={props.id}>{transaction.posted_at}</td>
        <td id={props.id}>{transaction.description}</td>
        <td id={props.id}>{transaction.category}</td>
        <td id={props.id}>{transaction.amount}</td>
      </tr>
      <TransactionComments />
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
