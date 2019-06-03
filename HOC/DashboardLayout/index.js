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
  faSlidersH,
  faStar,
  faComments,
  faFlagUsa,
  faSeedling,
  faFeather,
  faTrophy,
  faCrown,
  faUserAstronaut,
  faMoneyCheckAlt,
  faChartLine,
  faLongArrowAltUp,
  faAward,
  faMoneyBillWaveAlt,
  faClock,
  faDollarSign,
  faCheckCircle,
  faCoins,
  faUserClock,
  faBan,
  faTrash,
  faSortAmountDown,
  faPrint,
  faArrowAltCircleLeft,
  // faCcPaypal,
  // faCcStripe,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
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
  faSlidersH,
  faStar,
  faCanadianMapleLeaf,
  faComments,
  faFlagUsa,
  faSeedling,
  faFeather,
  faTrophy,
  faCrown,
  faUserAstronaut,
  faMoneyCheckAlt,
  faChartLine,
  faLongArrowAltUp,
  faAward,
  faMoneyBillWaveAlt,
  faClock,
  faDollarSign,
  faCheckCircle,
  faCoins,
  faUserClock,
  faBan,
  faTrash,
  faSortAmountDown,
  faPrint,
  faArrowAltCircleLeft,
  // faCcPaypal,
  // faCcStripe,
  faTimesCircle
);
import "../../scss/dashboard/home.scss";
import actions from "../../store/actions";
import selectors from "../../store/selectors";
const dev = process.env.NODE_ENV !== "production";
import MobileMenu from "./mobileMenu";
import Menu from "./menu";
import Header from "./header";

class Layout extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.setMediaSize);
    if (dev) {
      window.addEventListener("keypress", this.printProps);
    }
  }

  render() {
    return (
      <div
        className={`ga-panel ${
          this.props.router.asPath.includes("dashboard") ? "ga-home" : ""
        }`}
      >
        <div className="ga-green-panel">
          <Head>
            <title>Green Affiliates</title>
          </Head>
          <div className="ga-panel-wrap">
            <Header {...this.props} />
            <div className="ga-content-section">{this.props.children}</div>
            <footer>
              <p>
                2019{" "}
                <img
                  class="ga-footer-logo"
                  src="../static/img/ga-footer-logo.png"
                />{" "}
                All Rights Reserved.
              </p>
            </footer>
          </div>
          <Menu {...this.props} />
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
        this.props.mediaSize != mediaSize
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
  const getMenuOptions = selectors.home.makeGetMenuOptions();
  const getMediaSize = selectors.home.makeGetMediaSize();

  const mapStateToProps = (state, props) => {
    return {
      menuOptions: getMenuOptions(state, props),
      mediaSize: getMediaSize(state, props)
    };
  };
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Layout);
