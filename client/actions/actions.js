/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from "../constants/actionTypes";
// types ===> {ADD_CARDS:"ADD_CARDS"}

export const addCardActionCreator = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

// add more action creators

export const deleteCardActionCreator = (marketId) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});

export const addMarketActionCreator = () => ({
  type: types.ADD_MARKET,
});

export const setNewLocationActionCreator = (location) => ({
  type: types.SET_NEW_LOCATION,
  payload: location, 
}); 