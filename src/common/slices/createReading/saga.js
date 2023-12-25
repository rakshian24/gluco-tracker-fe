import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  createReadingSuccess,
  createReadingError,
  CREATE_READING_INIT,
} from "./actions";
import { API_ENDPOINTS, BASE_URL } from "../../../constants";
import { formatErrorObject } from "../../../utils";

export function* createReading(action) {
  try {
    let response = yield axios.post(
      `${BASE_URL}/${API_ENDPOINTS.READING_URL}`,
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
    yield put(createReadingSuccess(response.data.data));
  } catch (error) {
    yield put(createReadingError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(CREATE_READING_INIT, createReading);
}

export default rootSaga;
