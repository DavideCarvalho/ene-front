import {all, takeLatest} from 'redux-saga/effects'
import {SUBMIT_FORM} from "./login-container.constants";
import {Action} from "redux-actions";
import {ILoginState} from "./login-container.state";

function* submitLoginFormSaga({ type, payload }: Action<ILoginState>) {
  console.log('to aqui', type, payload);
  yield 'Hello Sagas!';
}

function* watchLoginSagas() {
  yield takeLatest<Action<ILoginState>>(SUBMIT_FORM, submitLoginFormSaga)
}

export default function* () {
  yield all([
    watchLoginSagas()
  ])
}
