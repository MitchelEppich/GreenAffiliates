/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/
import Immutable from "immutable";
import actionTypes from "../actions";
// import { combineReducers } from "redux";
import { updateObject } from "../utility";
import { combineReducers } from "redux-immutable";

import AffiliateReducer from "./affiliate";

const initialState = Immutable.fromJS({
  menuOptions: [
    { name: "Program" },
    { name: "Assets" },
    { name: "Commissions" },
    { name: "Affiliates" },
    { name: "Goals" },
    { name: "Messages" },
    { name: "Payment" },
    { name: "Settings" }
  ],
  data: "Text Data"
});

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return state.set("data", Immutable.fromJS(action.data));
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer,
  affiliate: AffiliateReducer
});
