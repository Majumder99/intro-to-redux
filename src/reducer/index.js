import { combineReducers } from "redux";
import changeTheNumber from "./upDown";

//we combining all the reducers
const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
