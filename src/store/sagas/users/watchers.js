import {takeLatest} from "redux-saga/effects";
import {LOGIN_USER} from "../../actions/actionTypes";
import {loginUser} from "./workers";

export default function* watchLogin () {
    yield takeLatest(LOGIN_USER.request, loginUser);
}