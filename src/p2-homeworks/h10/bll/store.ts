import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import HW12 from "../../h12/HW12";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

const store = createStore(reducers);
export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
