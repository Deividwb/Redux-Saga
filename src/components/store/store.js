import { legacy_createStore as createStore } from "redux";

import counterReducer from "./counterReducer";

export default createStore(counterReducer);
