/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from "redux";

// import all reducers here
import marketsReducer from "./marketsReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  markets: marketsReducer,
});

// make the combined reducers available for import
export default reducers;

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
