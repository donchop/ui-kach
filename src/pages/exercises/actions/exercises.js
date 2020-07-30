import axios from "axios";
import { setAlert } from "../../../components/alert/actions/alert";
import {
  GET_EXERCISES,
  EMPTY_EXERCISES,
  GET_EXERCISE,
  ADD_EXERCISE,
  EDIT_EXERCISE,
  DELETE_EXERCISE,
} from "../constants/actionTypes";

export const getExercises = (id) => async (dispatch) => {
  dispatch({ type: EMPTY_EXERCISES });
  try {
    const res = await axios.get(`/api/exercises/${id}`);
    dispatch({ type: GET_EXERCISES, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const getExercise = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/exercises/musclegroup/${id}`);
    dispatch({ type: GET_EXERCISE, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const addExercise = (form) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`/api/exercises/`, form, config);
    dispatch({ type: ADD_EXERCISE, payload: res.data });
    dispatch(setAlert("Упражнение добавлено", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const editExercise = (id, form) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/exercises/${id}`, form, config);

    dispatch({ type: EDIT_EXERCISE, payload: res.data });
    dispatch(setAlert("Упражнение изменено", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/exercises/${id}`);
    dispatch({ type: DELETE_EXERCISE, payload: id });
    dispatch(setAlert("Упражнение удалено", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
