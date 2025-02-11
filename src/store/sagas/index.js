import {all, fork} from 'redux-saga/effects';
import watchLogin from "./users/watchers";

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
    ])
}