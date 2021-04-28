import { takeLatest, call } from "redux-saga/effects";
import api, {
  testRequest,
  userRequest,
  OrganisationRequest,
} from "../../services";
import {
  GET_COLUMNS,
  GET_DATA,
  GET_PLANS,
  GET_INVOICES,
  DELETE_SELECTED,
  RESTORE_SELECTED,
} from "../constants/test";
import safeSaga from "../../helpers/safeSaga";
import { successHandler } from "../../helpers/apiRequests";

function* getData() {
  const response = yield call([api, "get"], testRequest.GET_DATA);

  yield call(successHandler, response, GET_DATA.success);
}

function* getColumns() {
  const response = yield call([api, "get"], testRequest.GET_COLUMNS);

  yield call(successHandler, response, GET_COLUMNS.success);
}

function* getPlans() {
  const response = yield call([api, "get"], userRequest.PLANS);

  yield call(successHandler, response, GET_PLANS.success);
}

function* deleteSelected({ payload }) {
  const response = yield call(
    [api, "post"],
    OrganisationRequest.DELETE_SELECTED,
    payload
  );

  yield call(successHandler, response, DELETE_SELECTED.success);
}

function* restoreSelected({ payload }) {
  const response = yield call(
    [api, "post"],
    OrganisationRequest.RESTORE_SELECTED,
    payload
  );

  yield call(successHandler, response, RESTORE_SELECTED.success);
}

function* getInvoice() {
  const { data } = yield call([api, "get"], userRequest.INVOICES);

  yield call(
    successHandler,
    { data: { data: data.invoices } },
    GET_INVOICES.success
  );
}

export default function* testSaga() {
  yield takeLatest(GET_DATA.request, safeSaga(getData, GET_DATA.error));
  yield takeLatest(
    GET_COLUMNS.request,
    safeSaga(getColumns, GET_COLUMNS.error)
  );
  yield takeLatest(GET_PLANS.request, safeSaga(getPlans, GET_PLANS.error));
  yield takeLatest(
    DELETE_SELECTED.request,
    safeSaga(deleteSelected, DELETE_SELECTED.error)
  );
  yield takeLatest(
    RESTORE_SELECTED.request,
    safeSaga(restoreSelected, RESTORE_SELECTED.error)
  );
  yield takeLatest(
    GET_INVOICES.request,
    safeSaga(getInvoice, GET_INVOICES.error)
  );
}
