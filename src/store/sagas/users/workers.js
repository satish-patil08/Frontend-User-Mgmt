import {put, call} from 'redux-saga/effects';
import * as api from '../../../api/users';
import {LOGIN_USER} from "../../actions/actionTypes";

export function* loginUser(action) {
    try {
        const response = yield call(api.loginUser, action.payload);
        yield put({
            type: LOGIN_USER.success,
            payload: response.data
        });
    } catch (error) {
        yield put({
            type: LOGIN_USER.fail,
            error: error.message
        });
    }
}
