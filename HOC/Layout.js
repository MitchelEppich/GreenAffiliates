/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import Head from "next/head";

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="pt-12">
        <Head>
          <title>Green Affiliates</title>
        </Head>
        {console.log(this.props.menuOptions)}{" "}
        {/* {this.props.misc.data
          ? alert(this.props.misc.data.data.sendData)
          : null} */}
        <div className="greenCard">{this.props.children}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => {
  return {
    menuOptions: state.getIn(["misc", "menuOptions"]).toJS()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
