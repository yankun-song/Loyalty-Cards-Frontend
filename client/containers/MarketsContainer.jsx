/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions";
// import child components...
import MarketCreator from "../components/MarketCreator.jsx";

import MarketsDisplay from "../components/MarketsDisplay.jsx";
/*
state = {
  markets: {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [{    
        marketID: 0001,
        Location:Palo Alto,
        Cards: 4}
        ,{}
        ,{}
      ],
  lastMarketId: 10000,
  newLocation: "",
  }
}

*/
const mapStateToProps = (state) => ({
  marketList: state.markets.marketList,
  lastMarketId: state.markets.lastMarketId,
  newLocation: state.markets.newLocation,
  totalCards: state.markets.totalCards,
});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  addCard: (marketId) => {
    dispatch(actions.addCardActionCreator(marketId));
  },
  deleteCard: (marketId) => {
    dispatch(actions.deleteCardActionCreator(marketId));
  },
  addMarket: () => {
    dispatch(actions.addMarketActionCreator());
  },
  newLocation: (location) => {
    dispatch(actions.setNewLocationActionCreator(location));
  },
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
    this.combinedAddMarket = this.combinedAddMarket.bind(this);
  }

  combinedAddMarket(location) {
    this.props.newLocation(location);
    this.props.addMarket();
  }
  render() {
    return (
      <div className="innerbox">
        <MarketCreator addMarket={this.combinedAddMarket} />
        <MarketsDisplay
          totalCards={this.props.totalCards}
          deleteCard={this.props.deleteCard}
          addCard={this.props.addCard}
          marketList={this.props.marketList}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
