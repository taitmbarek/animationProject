import {all} from 'redux-saga/effects';

import OnboardingSaga from './Onboarding/saga';

export default function* rootSaga() {
  yield all([OnboardingSaga()]);
}
