import {createGenericReducer} from "./createGenericReducer";
import {LOGIN_USER} from "../actions/actionTypes";


const initialState = {
    loginUser: {
        loadingField: "loginLoading",
        responseField: "loginResponse"
    }
};

export const loginUserReducer = createGenericReducer(
    LOGIN_USER,
    initialState.loginUser
);
