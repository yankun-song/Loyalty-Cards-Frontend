/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from "react";

const MarketCreator = (props) => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <p>Create New Market</p>
    <div>Location:</div>
    <input type="text" id="input"></input>
    <button
      onClick={() => {
        props.addMarket(document.querySelector("#input").value);
      }}
      type="button"
    >
      Add Market
    </button>
  </div>
);

export default MarketCreator;
