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
    // case actionTypes.SET_USERNAME_ERROR:
    //   return updateObject(state, {
    //     usernameAuthError: action.error
    //   });
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer
});
