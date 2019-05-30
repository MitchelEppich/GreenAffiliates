/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import About from "./about";
import Affiliate from "./affiliate";
import Affiliates from "./affiliates";
import Assets from "./assets";
import Commissions from "./commissions";
import Contact from "./contact";
import Dashboard from "./dashboard";
import Faq from "./faq";
import Goals from "./goals";
import Login from "./login";
import Merchant from "./merchant";
import Messages from "./messages";
import Payment from "./payment";
import Privacy from "./privacy";
import Program from "./program";
import Register from "./register";
import Settings from "./settings";
import Signup from "./signup";
import Support from "./support";
import Terms from "./terms";

const uri = "http://localhost:3000/graphql";
// const uri = "https://localhost:443/graphql";

const imports = {
  ...About(uri),
  ...Affiliate(uri),
  ...Affiliates(uri),
  ...Assets(uri),
  ...Commissions(uri),
  ...Contact(uri),
  ...Dashboard(uri),
  ...Faq(uri),
  ...Goals(uri),
  ...Login(uri),
  ...Merchant(uri),
  ...Messages(uri),
  ...Payment(uri),
  ...Privacy(uri),
  ...Program(uri),
  ...Register(uri),
  ...Settings(uri),
  ...Signup(uri),
  ...Support(uri),
  ...Terms(uri)
};

const actionTypes = {
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE"
};

const actions = {
  setMediaSize: input => {
    return {
      type: actionTypes.SET_MEDIA_SIZE,
      input: input.mediaSize
    };
  }
};

const query = {};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
