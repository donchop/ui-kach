import axios from "axios";
import { setAlert } from "../../../components/alert/actions/alert";
import {
  GET_PROGRAMS,
  ADD_PROGRAM,
  GET_PROGRAM,
  EDIT_PROGRAM,
  ADD_COMMENT,
  REMOVE_COMMENT,
  DELETE_PROGRAM,
} from "../constants/actionTypes";

export const addProgram = (form) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/posts", form, config);

    dispatch({ type: ADD_PROGRAM, payload: res.data });
    dispatch(setAlert("Программа тренировок добавлена", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const editProgram = (id, form) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/posts/${id}`, form, config);

    dispatch({ type: EDIT_PROGRAM, payload: res.data });
    dispatch(setAlert("Программа тренировок изменена", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const getPrograms = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({ type: GET_PROGRAMS, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const getProgram = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({ type: GET_PROGRAM, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const deleteProgram = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({ type: DELETE_PROGRAM, payload: id });
    dispatch(setAlert("Пограмма тренировок удалена", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const addComment = (form, id) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`/api/posts/comment/${id}`, form, config);

    dispatch({ type: ADD_COMMENT, payload: res.data });
    dispatch(setAlert("Комментарий добавлен", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const removeComment = (post_id, comment_id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `/api/posts/comment/${post_id}/${comment_id}`
    );

    dispatch({ type: REMOVE_COMMENT, payload: res.data });
    dispatch(setAlert("Комментарий удалён", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
