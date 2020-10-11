import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CardList from "./CardsList";
import { setCardDescription } from "../../store//background/actions";

function CardListContainer(props) {
  return <CardList {...props} setCardDescription={props.setCardDescription} />;
}

const mapStateToProps = (state) => {
  return {
    setCardDescription: state.backgroundReducer.setCardDescription
  };
};
const mapDispatchToProps = { setCardDescription };

CardListContainer.propTypes = {
  data: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);
