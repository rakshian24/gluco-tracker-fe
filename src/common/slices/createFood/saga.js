import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  createFoodSuccess,
  createFoodError,
  CREATE_FOOD_INIT,
} from "./actions";
import { API_ENDPOINTS, BASE_URL } from "../../../constants";
import { formatErrorObject } from "../../../utils";

export function* createFood(action) {
  try {
    let response = yield axios.post(
      `${BASE_URL}/${API_ENDPOINTS.CREATE_FOOD_URL}`,
      {
        ...action.payload,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    yield put(createFoodSuccess(response.data.data));
  } catch (error) {
    yield put(createFoodError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(CREATE_FOOD_INIT, createFood);
}

export default rootSaga;
