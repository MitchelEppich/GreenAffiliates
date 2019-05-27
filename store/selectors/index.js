import { createSelector } from "reselect";

const data = state => state.get("data");

export const makeData = () =>
  createSelector(
    data,
    data => data.toJS().data
  );
