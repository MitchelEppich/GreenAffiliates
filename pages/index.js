import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

//get selectors to work
// import * as selectors from "../store/selectors";
// import { createStructuredSelector } from "reselect";

import Home from "../components/home";
import Layout from "../HOC/Layout";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Home {...this.props} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    miscData: state.toJS().misc.data,
    affiliateData: state.toJS().affiliate.data,
    menuOptions: state.toJS().misc.menuOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withData(Index));
