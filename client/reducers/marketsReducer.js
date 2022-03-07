/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
};

const marketsReducer = (state = initialState, action) => {
  //action: {type:ADD_MARKET, payload:Palo Alto}

  // const copiedMarketList = [...state.marketList];
  // const copiedState = { ...state, marketList: copiedMarketList };
  let marketList;
  switch (action.type) {
    case types.ADD_MARKET: {
      //"ADD_MARKET"
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;
      // create the new market object from provided data
      const newMarket = {
        marketId: lastMarketId,
        location: state.newLocation,
        cards: 0,
        //percentage: 4 / 100,
        //percent:
      };

      // push the new market onto a copy of the market list
      //marketList = JSON.parse(JSON.stringify(state.marketList));
      const marketList = [];
      for (const market of state.marketList) {
        marketList.push({ ...market });
      }
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        marketList: marketList,
        lastMarketId,
        totalMarkets,
        newLocation: "",
      };
    }
    case types.SET_NEW_LOCATION: {
      const newLocation = action.payload;
      marketList = JSON.parse(JSON.stringify(state.marketList));
      //make a deep copy of the state
      //update the "newLocation" value
      return { ...state, marketList, newLocation };
    }

    case types.ADD_CARD: {
      //update the number of total cards in state
      const totalCards = state.totalCards + 1;
      const marketList = [];
      for (const market of state.marketList) {
        marketList.push({ ...market });
      }
      // we want to update the info of the market with target marketID

      // marketList [market1, market2, market3]    market2: {marketid:0001, location:Palo ALto, card:1}
      for (let i = 0; i < marketList.length; i++) {
        if (marketList[i].marketId === action.payload) {
          marketList[i].cards += 1;
          //console.log(marketList[i].card);
        }
      }
      return { ...state, marketList, totalCards };

      //update the number of cards in that market
      // use the marketID to know which market will have one more card
    }

    case types.DELETE_CARD: {
      const totalCards = state.totalCards - 1;
      marketList = JSON.parse(JSON.stringify(state.marketList));

      for (let i = 0; i < marketList.length; i++) {
        if (marketList[i].marketId === action.payload) {
          marketList[i].cards -= 1;
        }
      }
      return { ...state, marketList, totalCards };
    }

    default: {
      return state;
    }
  }
};

export default marketsReducer;
