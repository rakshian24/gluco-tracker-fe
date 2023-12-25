import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { signUpSuccess, signUpError, SIGN_UP_INIT } from "./actions";
import { API_ENDPOINTS, BASE_URL } from "../../../constants";
import { setCredentials } from "../auth/actions";
import { formatErrorObject } from "../../../utils";

export function* signUp(action) {
  try {
    let response = yield axios.post(
      `${BASE_URL}/${API_ENDPOINTS.SIGN_UP}`,
      {
        ...action.payload,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    yield put(setCredentials(response.data.data));
    yield put(signUpSuccess(response.data.data));
  } catch (error) {
    yield put(signUpError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(SIGN_UP_INIT, signUp);
}

export default rootSaga;
