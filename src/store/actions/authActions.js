import {LOGIN_USER} from "./actionTypes";

export const loginUserRequest = (payload) => ({
    type: LOGIN_USER.request,
    payload,
});