import React from 'react';

class Search extends React.Component {
  state = {
    query: ''
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={this.handleChange}
          value={this.state.query}
          type="text"
          placeholder={'Search your Recent Transactions'}
        />
        <i className="circular search link icon" />
      </div>
    );
  }
}

export default Search;
