import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer/index";

//this is redux store
const store = createStore(rootReducer);

export default store;
