/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

const initialState = {};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_DATA:
      return updateObject(state, {
        data: action.data
      });
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer
});
