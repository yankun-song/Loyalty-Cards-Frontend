/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from "react";
import { render } from "react-dom";

import MainContainer from "./containers/MainContainer.jsx";
import MarketsContainer from "./containers/MarketsContainer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
        <MarketsContainer />
      </div>
    );
  }
}

//render(<App />, document.querySelector('#contents'));

export default App;
