import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const { fetchGiphy } = this.props;
    fetchGiphy(event.currentTarget.value);
  }

  render() {
    return(
      <input type="text" className="form-control form-search" placeholder:"Search for a Gif"
        onChange={this.handleChnage} />
    );
  }
}

export default SearchBar;
