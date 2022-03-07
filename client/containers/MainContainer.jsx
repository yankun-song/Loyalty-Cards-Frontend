/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import  TotalsDisplay  from "../components/TotalsDisplay.jsx";
//import MarketsContainer from "./MarketsContainer";
// import from child components...

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
  totalCards: state.markets.totalCards,
  totalMarkets: state.markets.totalMarkets,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">The SONGS Loyalty Cards</h1>
       
          <TotalsDisplay
            totalCards={this.props.totalCards}
            totalMarkets={this.props.totalMarkets}
          />

        </div>
      </div>
    );
  }
}
//export default MainContainer;
export default connect(mapStateToProps, null)(MainContainer);
