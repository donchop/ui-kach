import {
  GET_EXERCISES,
  ADD_EXERCISE,
  EDIT_EXERCISE,
  GET_EXERCISE,
  DELETE_EXERCISE,
} from "../constants/actionTypes";

const initialState = {
  list: [],
  listItem: null,
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXERCISES:
      return { ...state, list: payload, loading: false };
    case ADD_EXERCISE:
      return { ...state, list: [payload, ...state.list], loading: false };
    case EDIT_EXERCISE:
    case GET_EXERCISE:
      return { ...state, listItem: payload, loading: false };
    case DELETE_EXERCISE:
      return {
        ...state,
        list: state.list.filter((listItem) => listItem._id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};
