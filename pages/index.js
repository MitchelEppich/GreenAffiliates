/*******************************************/
/*Landing home
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import selectors from "../store/selectors";
import Layout from "../HOC/LandingLayout";
import BannerSection from "../components/landing/home/bannerSection";
import BrandingSection from "../components/landing/home/brandSection";
import MerchantSection from "../components/landing/home/merchantSection";
import ExplainSection from "../components/landing/home/explainSection";
import VideoSection from "../components/landing/home/videoSection";
import FeaturesSection from "../components/landing/home/featuresSection";
class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout {...this.props}>
        {/* {this.props.data} */}
        <BannerSection />
        <BrandingSection />
        <MerchantSection />
        <ExplainSection />
        <VideoSection />
        <FeaturesSection />
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
