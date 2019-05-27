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

const uri = "http://localhost:3000/graphql";
// const uri = "https://localhost:443/graphql";

const imports = {};

const actionTypes = {
  SEND_DATA: "SEND_DATA"
};

const actions = {
  sendData: props => {
    let stuff = props.misc;
    stuff.data = "adam";
    
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.sendData,
        variables: { ...data }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SEND_DATA,
            data: data
          });
        })
        .catch(error => console.log(error));
    };
  }
};

const query = {
  sendData: gql`
    query($name: String, $email: String, $message: String) {
      sendData(input: { name: $name, email: $email, message: $message })
    }
  `
};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
