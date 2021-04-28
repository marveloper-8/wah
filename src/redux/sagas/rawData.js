import { takeLatest, call } from "redux-saga/effects";
import api, { rawDataRequest } from "../../services";
import { GET_COLLECTIONS } from "../constants/rawData";
import safeSaga from "../../helpers/safeSaga";
import { successHandler } from "../../helpers/apiRequests";

function* getData() {
  const response = yield call([api, "get"], rawDataRequest.COLLECTION);

  yield call(successHandler, response, GET_COLLECTIONS.success);
}

export default function* rawDataSaga() {
  yield takeLatest(
    GET_COLLECTIONS.request,
    safeSaga(getData, GET_COLLECTIONS.error)
  );
}
