import React from 'react'

class Search extends React.Component {
  constructor(){
    super();

    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
    var x = e.target.value
    this.props.handleSearchChange(x)
  }

  render() {

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={this.handleChange}
        value={this.state.search}
        placeholder="Search your Recent Transactions"
      />
      <i className="circular search link icon"></i>
    </div>
  )
  }
}

export default Search
