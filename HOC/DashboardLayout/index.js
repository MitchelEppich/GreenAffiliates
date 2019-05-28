/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import {
  faHome,
  faCogs,
  faFile,
  faHandHoldingUsd,
  faUsers,
  faChartPie,
  faEnvelope,
  faCreditCard,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faHome,
  faCogs,
  faFile,
  faHandHoldingUsd,
  faUsers,
  faChartPie,
  faEnvelope,
  faCreditCard,
  faSlidersH
);
import "../../scss/home.scss";
import actions from "../../store/actions";
import selectors from "../../store/selectors";
const dev = process.env.NODE_ENV !== "production";
import MobileMenu from "./mobileMenu";
import Menu from "./menu";

class Layout extends Component {
  componentDidMount() {
    let setMediaSize = this.setMediaSize;
    window.addEventListener("resize", this.setMediaSize);
    if (dev) {
      window.addEventListener("keypress", this.printProps);
    }
  }

  render() {
    return (
      <div className="pt-12">
        <Head>
          <title>{this.props.data}</title>
        </Head>
        <div className="greenCard flex justify-between">
          {["sm", "md", "lg"].includes(this.props.mediaSize) ? (
            <MobileMenu menuOptions={this.props.menuOptions} />
          ) : (
            <Menu menuOptions={this.props.menuOptions} />
          )}
          <div className="w-4/5 py-12 bg-white rounded-lg">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  printProps = e => {
    if (e.shiftKey && e.code === "KeyP") {
      console.log(this.props);
    }
  };

  setMediaSize = () => {
    let mediaSizes = {
      sm: { min: 100, max: 479 },
      md: { min: 480, max: 767 },
      lg: { min: 768, max: 991 },
      xl: { min: 992, max: 1367 },
      xxl: { min: 1368, max: 999999999 }
    };
    for (let mediaSize of Object.keys(mediaSizes)) {
      let _mediaSizeDim = mediaSizes[mediaSize];
      let _width = window.innerWidth;
      if (
        _width ==
          Math.max(_mediaSizeDim.min, Math.min(_width, _mediaSizeDim.max)) &&
        this.props.misc.mediaSize != mediaSize
      ) {
        if (["sm", "md"].includes(mediaSize)) {
          this.props.setMediaSize({ mediaSize: mediaSize });
        } else {
          this.props.setMediaSize({ mediaSize: mediaSize });
        }
        return mediaSize;
      }
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaSize: input => dispatch(actions.setMediaSize(input))
  };
};

const makeMapStateToProps = () => {
  // const getDataState = selectors.program.makeGetDataState();
  const getMenuOptionsState = selectors.home.makeGetMenuOptionsState();
  const getMediaSize = selectors.home.makeGetMediaSize();

  const mapStateToProps = (state, props) => {
    return {
      // data: getDataState(state, props),
      menuOptions: getMenuOptionsState(state, props),
      mediaSize: getMediaSize(state, props)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Layout);
