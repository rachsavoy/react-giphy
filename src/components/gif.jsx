import React, { Component } from 'react';

export default class Gif extends Component {

  handleClick = () => {
    const {gifId, changeSelectGif } = this.props;
    changeSelectGif(gifId);
  }

  render() {
    const { gifId } = this.props;
    const url = `https://media1.giphy.com/media/${gifId}.gif`;
    return(
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}
