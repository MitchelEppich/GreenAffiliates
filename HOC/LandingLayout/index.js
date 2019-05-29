/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";

import "../../scss/landing/landing.scss";
import "../../scss/landing/login.scss";
import "../../scss/landing/signup.scss";
import "../../scss/landing/companyDirectory.scss";
import actions from "../../store/actions";
import selectors from "../../store/selectors";
import Menu from "./menu/index";
import Footer from "./footer/index";

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="home page-bg">
        <Head>
          <title>{this.props.data}</title>
        </Head>

        <div className="ga-body-wrap">
          <Menu {...this.props} />

          <div className="">{this.props.children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const makeMapStateToProps = () => {
  // const getDataState = selectors.program.makeGetDataState();
  const getMenuOptions = selectors.home.makeGetMenuOptions();

  const mapStateToProps = (state, props) => {
    return {
      // data: getDataState(state, props),
      menuOptions: getMenuOptions(state, props)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Layout);
