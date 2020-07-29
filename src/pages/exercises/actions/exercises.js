import axios from "axios";
import { setAlert } from "../../../components/alert/actions/alert";
import { GET_EXERCISES } from "../constants/actionTypes";


export const getExercises = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/exercises");

    dispatch({ type: GET_EXERCISES, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
