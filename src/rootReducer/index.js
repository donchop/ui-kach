import { combineReducers } from "redux";
import alert from "../components/alert/reducers";
import auth from "../pages/auth/reducers";
import programs from "../pages/programs/reducers";
import exercises from "../pages/exercises/reducers";

export default combineReducers({ alert, auth, programs, exercises });
