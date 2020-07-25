import {
  GET_PROGRAMS,
  ADD_PROGRAM,
  GET_PROGRAM,
  ADD_COMMENT,
  REMOVE_COMMENT,
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
    case GET_PROGRAM:
      return { ...state, program: payload, loading: false };
    case ADD_PROGRAM:
      return {
        ...state,
        programs: [payload, ...state.programs],
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
          comments: payload
        },
        loading: false,
      };

    default:
      return state;
  }
};
