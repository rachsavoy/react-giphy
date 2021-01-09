import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const giphy = require('giphy-api')('bJD6peqj4XR5WD7eCDzVUArNkunKa6fH');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIdList: ["Thosb7jsFUTiU/200w.webp?cid=ecf05e473068ay68s9c8e77b0tci1e3m3rfjsi8gk8six1dw&rid=200w", "s2GqQlfNKIYD9AVFiz/100w.webp?cid=ecf05e47f4ig1mzz10swnwrsjytjpf2t3nw397xz4ijp1cf6&rid=100w", "t9ctG5MZhyyU8/100.webp?cid=ecf05e473068ay68s9c8e77b0tci1e3m3rfjsi8gk8six1dw&rid=100"],
      gifIdSelected: "JPhJwG1pW4kINV4VTx/200w.webp?cid=ecf05e47qhww7ru1x75nve8sa37bj2cnoavg95p0ahf2n7ly&rid=200w"
    };
    this.fetchGiphy("star wars");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    },  (error, result) => {
      this.setState({ gifIdList: result.data.map(gif => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ gifIdSelected: newSelectedGifId });
  }

  render() {
    const { gifIdSelected, gifIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
        <SearchBar fetchGiphy={this.fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
        <div className="right-scene">
          <GifList gifIdList={gifIdList} chnageSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
