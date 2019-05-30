import { createSelector } from "reselect";
import program from "./program";
import about from "./about";
import affiliate from "./affiliate";
import affiliates from "./affiliates";
import assets from "./assets";
import commissions from "./commissions";
import contact from "./contact";
import dashboard from "./dashboard";
import faq from "./faq";
import goals from "./goals";
import login from "./login";
import merchant from "./merchant";
import messages from "./messages";
import payment from "./payment";
import privacy from "./privacy";
import register from "./register";
import settings from "./settings";
import signup from "./signup";
import support from "./support";
import terms from "./terms";

const home = {
  getMenuOptions: (state, props) => {
    return state.misc.menuOptions;
  },
  makeGetMenuOptions: () => {
    return createSelector(
      [home.getMenuOptions],
      menuOptions => menuOptions
    );
  },
  getMediaSize: (state, props) => {
    return state.misc.mediaSize;
  },
  makeGetMediaSize: () => {
    return createSelector(
      [home.getMediaSize],
      mediaSize => mediaSize
    );
  }
};
const selectors = {
  home: home,
  program: program(createSelector),
  about: about(createSelector),
  affiliate: affiliate(createSelector),
  affiliates: affiliates(createSelector),
  assets: assets(createSelector),
  commissions: commissions(createSelector),
  contact: contact(createSelector),
  dashboard: dashboard(createSelector),
  faq: faq(createSelector),
  goals: goals(createSelector),
  login: login(createSelector),
  merchant: merchant(createSelector),
  messages: messages(createSelector),
  payment: payment(createSelector),
  privacy: privacy(createSelector),
  register: register(createSelector),
  settings: settings(createSelector),
  support: support(createSelector),
  terms: terms(createSelector)
};

export default selectors;
