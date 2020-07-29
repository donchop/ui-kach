import {
  GET_PROGRAMS,
  ADD_PROGRAM,
  GET_PROGRAM,
  DELETE_PROGRAM,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_PROGRAM,
} from "../constants/actionTypes";

const initialState = {
  programs: [],
  program: null,
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROGRAMS:
      return { ...state, programs: payload, loading: false };
    case EDIT_PROGRAM:
    case GET_PROGRAM:
      return { ...state, program: payload, loading: false };
    case ADD_PROGRAM:
      return {
        ...state,
        programs: [payload, ...state.programs],
        loading: false,
      };
    case DELETE_PROGRAM:
      return {
        ...state,
        programs: state.programs.filter((program) => program._id !== payload),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        program: { ...state.program, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        program: {
          ...state.program,
          comments: payload,
        },
        loading: false,
      };

    default:
      return state;
  }
};
