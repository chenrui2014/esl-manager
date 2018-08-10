
import {take,fork,all,call,takeEvery,select,put} from 'redux-saga/effects';
import * as actions from './login/loginAction';
import {api} from './services';
import { loginReducer } from './login/loginReducer';
export function* login(username,password){

    try{
        const userData = yield call(api.login(username,password));
        yield put(actions.loginSuccess(userData));
    }catch (error) {
        yield put(actions.loginFailure(error));
    }
}

export function* watchLogin() {
    while (true){
        const {username,password} = yield take(actions.LOGIN_REQUEST);
        yield call(login(username,password))
    }
}

export default function* root() {
    yield all([fork(watchLogin)])
}