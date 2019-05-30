/*******************************************/
/*Landing home
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import selectors from "../store/selectors";
import Layout from "../HOC/DashboardLayout";
import Settings from "../components/dashboard/settings";
class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout {...this.props}>
        <Settings {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { sendData: data => dispatch(actions.sendData(data)) };
};

const makeMapStateToProps = () => {
  const getDataState = selectors.program.makeGetDataState();
  // const getMenuOptionsState = selectors.home.makeGetMenuOptionsState();

  const mapStateToProps = (state, props) => {
    return {
      data: getDataState(state, props)
      // menuOptions: getMenuOptionsState(state, props)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(withData(Index));
