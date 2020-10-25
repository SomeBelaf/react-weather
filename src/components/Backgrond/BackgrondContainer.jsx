import React from "react";
import { connect } from "react-redux";
import Background from "./Background";

function BackgroundContainer(props) {
  return <Background {...props} cardDescription={props.cardDescription} />;
}

const mapStateToProps = (state) => {
  return {
    cardDescription: state.backgroundReducer.cardDescription
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundContainer);
