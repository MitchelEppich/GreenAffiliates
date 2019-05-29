/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";

import actions from "../../store/actions";
import selectors from "../../store/selectors";

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="pt-12">
        <Head>
          <title>{this.props.data}</title>
        </Head>
        <div className="greenCard flex justify-between">
          <div className="w-4/5 py-12 bg-white rounded-lg">
            {this.props.children}
          </div>
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
