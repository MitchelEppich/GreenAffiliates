/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import Layout from "../HOC/Layout";

import registerServiceWorker from "../registerServiceWorker";

class Index extends Component {
  componentDidMount() {
    registerServiceWorker();
  }

  render() {
    return <div>Base Project</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
