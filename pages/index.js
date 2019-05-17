/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import Layout from "../HOC/Layout";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <form
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const formData = new window.FormData(form);
            var object = {};
            formData.forEach((value, key) => {
              object[key] = value;
            });
            this.props.sendData(object);
          }}
          className="w-400 h-800 bg-green-light rounded-full mx-auto flex flex-wrap justify-center content-start pt-32"
        >
          <input
            className="w-3/4 h-12 my-3 rounded pl-3"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="w-3/4 h-12 my-3 rounded pl-3"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            className="w-3/4 h-12 my-3 rounded pl-3"
            type="text"
            name="message"
            placeholder="message"
          />
          <input
            className="w-3/4 bg-green-dark text-white uppercase cursor-pointer p-3"
            type="submit"
            value="submit"
          />
        </form>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { sendData: data => dispatch(actions.sendData(data)) };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
