import React from 'react'

class Transaction extends React.Component {
  render() {
    return (
      <div>
        {this.props.singleTransaction.description}
        </div>
    )
  }
}

export default Transaction
