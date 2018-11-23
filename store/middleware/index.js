import actions from "../actions";

const imports = [];

const middleware = [
  // Log
  store => {
    return next => {
      return action => {
        const result = next(action);
        // console.log("Middleware action...", action.type);
        // console.log("Middleware next state", store.getState());
        return result;
      };
    };
  }
];

export default [...middleware, ...imports];
