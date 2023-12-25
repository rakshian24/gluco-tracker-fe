import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  fetchFoodsSuccess,
  fetchFoodsError,
  FETCH_FOODS_INIT,
} from "./actions";
import { API_ENDPOINTS, BASE_URL } from "../../../constants";
import { formatErrorObject } from "../../../utils";

export function* fetchFoods() {
  try {
    let response = yield axios.get(
      `${BASE_URL}/${API_ENDPOINTS.GET_ALL_FOODS_URL}`,
      {
        withCredentials: true,
      },
    );
    yield put(fetchFoodsSuccess(response.data));
  } catch (error) {
    yield put(fetchFoodsError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_FOODS_INIT, fetchFoods);
}

export default rootSaga;
