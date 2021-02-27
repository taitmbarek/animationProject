import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {registerUserFailed, registerUserSuccess} from './actions';
import {REGISTER_USER} from './actionTypes';

function* registerUser({payload}) {
  console.log('payload', payload);
  try {
    const res = yield fetch('https://api.openbrewerydb.org/breweries/5494');
    const response = yield res.json();
    console.log('google response', response);
    if (response) {
      yield put(
        registerUserSuccess({
          ...response.data?.data,
          isLoggedIn: true,
        }),
      );
    } else {
      yield put(registerUserFailed(response.data?.data?.error));
    }
  } catch (error) {
    console.log('catch', error);
    yield put(registerUserFailed(error));
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* onboardSaga() {
  yield all([fork(watchUserRegister)]);
}
export default onboardSaga;
