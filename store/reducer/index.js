/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

const initialState = {
  mediaSize: "xl",
  data: "Whatever whatever",
  menuOptions: [
    { label: "Home", icon: "home", link: "dashboard" },
    { label: "Program", icon: "cogs", link: "program" },
    { label: "Assets", icon: "file", link: "assets" },
    { label: "Commissions", icon: "hand-holding-usd", link: "commissions" },
    { label: "Affiliates", icon: "users", link: "affiliates" },
    { label: "Goals", icon: "chart-pie", link: "goals" },
    { label: "Messages", icon: "envelope", link: "messages" },
    { label: "Payment", icon: "credit-card", link: "payment" },
    { label: "Settings", icon: "sliders-h", link: "settings" }
  ]
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_DATA:
      return updateObject(state, {
        data: action.data
      });
    case actionTypes.SET_MEDIA_SIZE:
      return updateObject(state, { mediaSize: action.input });
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer
});
