import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render(){
    return (
      <div>
        <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="JPhJwG1pW4kINV4VTx/200w.webp?cid=ecf05e47qhww7ru1x75nve8sa37bj2cnoavg95p0ahf2n7ly&rid=200w" />
        </div>
        </div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;
