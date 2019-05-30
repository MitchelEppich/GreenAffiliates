/*******************************************/
/*Landing home
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import selectors from "../store/selectors";
import Layout from "../HOC/DashboardLayout";

import Home from "../components/dashboard/home";
class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout {...this.props}>
        <Home {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { sendData: data => dispatch(actions.sendData(data)) };
};

const makeMapStateToProps = () => {
  const getDataState = selectors.program.makeGetDataState();

  const mapStateToProps = (state, props) => {
    return {
      data: getDataState(state, props)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(withData(Index));
