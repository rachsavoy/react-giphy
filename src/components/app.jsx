import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'bJD6peqj4XR5WD7eCDzVUArNkunKa6fH';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "JPhJwG1pW4kINV4VTx/200w.webp?cid=ecf05e47qhww7ru1x75nve8sa37bj2cnoavg95p0ahf2n7ly&rid=200w"
    };
  }

  search = (query) => {
    giphy({api-Key: GIPHY_API_KEY, https:true })
    .search({
      q: query,
      rating: 'g',
      limit: 10
    },  (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

 selectGif = (id) => {
    this.setState({
     selectedGifId: id
   });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
