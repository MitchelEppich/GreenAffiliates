import { createSelector } from "reselect";
import program from "./program";

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
  program: program(createSelector)
};

export default selectors;
