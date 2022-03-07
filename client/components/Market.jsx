/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from "react";

const Market = (
  props //market: { marketId: 0001,location:Palo Alto, cards: 4}
) => (
  <div className="marketBox">
    <div>MarketID: {props.market.marketId}</div>
    <div>Location: {props.market.location}</div>
    <div>Cards: {props.market.cards}</div>
    <div>
      % of total:{((props.market.cards / props.totalCards) * 100).toFixed(2)}
      {/* {() => {
        if (props.totalCards == 0) return 0;
        return ((props.market.cards / props.totalCards) * 100).toFixed(2);
      }} */}
    </div>
    <button
      onClick={() => {props.addCard(props.market.marketId);}}type="button">
      Add Card
    </button>
    <button
      onClick={() => {props.deleteCard(props.market.marketId);}}type="button">
      Delete Card
    </button>
  </div>
);

export default Market;
