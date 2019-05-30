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
  ],
  companyDirectory: [
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    },
    {
      name: "CannaHydro Co.",
      excerpt:
        "Developer of specially made hydroponics for the Cannabis Ind...",
      description:
        "Developer of specially made hydroponics for the Cannabis Industry CannaHydro supplies the top cannabis producers with state of the art equipment.From custom made greenhouses to hoses and hydro trays CannaHydro make a product for every step of the process. CannaHydro offers 15% commission on all products."
    }
  ]
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_DATA:
      return updateObject(state, {
        data: action.data
      });
    case actionTypes.GET_COMPANIES:
      return updateObject(state, {
        companyDirectory: action.companyDirectory
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
