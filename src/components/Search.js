import React from 'react'

class Search extends React.Component{

  updateSearch = (event) => {
    this.props.handleSearch(event.target.value)
  }

  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange = {this.updateSearch}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
