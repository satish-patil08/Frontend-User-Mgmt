import {combineReducers} from "@reduxjs/toolkit";
import * as loggedIn from "./usersReducer";

const rootReducer = combineReducers({
    loginUser: loggedIn.loginUserReducer,
})

export default rootReducer;