/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from "react";
import Market from "./Market.jsx";

const MarketsDisplay = (props) => {
  // marketList [{market1's info}, {maket2's info}]
  const markets = [];
  for (let i = 0; i < props.marketList.length; i++) {
    markets.push(
      <Market
        totalCards={props.totalCards}
        deleteCard={props.deleteCard}
        addCard={props.addCard}
        market={props.marketList[i]}
        key={i}
      />
    );
  }
  return (
    <div className="displayBox">
      <h4>Markets</h4>
      {markets}
    </div>
  );
};

export default MarketsDisplay;
