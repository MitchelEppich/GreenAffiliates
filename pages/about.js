/*******************************************/
/*Landing home
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import selectors from "../store/selectors";
import Layout from "../HOC/LandingLayout";
import About from "../components/landing/about";
class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <About />
        {/* <div>{this.props.data}</div> */}
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
