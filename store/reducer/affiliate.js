/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/
import Immutable from "immutable";
import actionTypes from "../actions";

const initialState = Immutable.fromJS({
  affiliates: {
    foobar: { name: "foobar" },
    bar: { name: "bar" },
    foo: { name: "foo" },
    baz: { name: "baz" }
  },
  data: "affiliate Data" 
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return state.set("data", Immutable.fromJS(action.data));
    default:
      return state;
  }
};
