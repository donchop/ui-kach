import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getExercises } from "../actions/exercises";
import { Container } from "@material-ui/core";

const MuscleGroup = ({ getExercises, list }) => {
  return (
    <Container>
      sdf
    </Container>
  );
};

MuscleGroup.propTypes = {
  getExercises: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.exercises.exercises.list,
});

export default connect(mapStateToProps, { getExercises })(MuscleGroup);
