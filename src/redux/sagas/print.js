import { takeLatest, call } from "redux-saga/effects";
import api, { printRequest } from "../../services";
import {
  GET_ORGANISATIONS,
  GET_SPACES,
  GET_APPS,
  CREATE_TEMPLATE,
  GET_TEMPLATES,
  DELETE_TEMPLATE,
} from "../constants/print";
import safeSaga from "../../helpers/safeSaga";
import { successHandler } from "../../helpers/apiRequests";
import { convertParamsToString } from "../../helpers/urlParser";
import history from "../../helpers/history";

function* getOrganisations() {
  const response = yield call([api, "get"], printRequest.ORGANIZATIONS);

  yield call(successHandler, response, GET_ORGANISATIONS.success);
}

function* getTemplates() {
  const response = yield call([api, "get"], printRequest.TEMPLATES);

  yield call(successHandler, response, GET_TEMPLATES.success);
}

function* createTemplate({ payload }) {
  const response = yield call([api, "post"], printRequest.CREATE, payload);

  yield call(successHandler, response, CREATE_TEMPLATE.success);
  history.push("/print-home");
}

function* deleteTemplate({ payload }) {
  yield call([api, "delete"], printRequest.DELETE + "/" + payload);
  const response = {
    data: payload,
    status: 200,
  };

  yield call(successHandler, response, DELETE_TEMPLATE.success);
}

function* getSpaces({ payload }) {
  const url = convertParamsToString(printRequest.SPACES, payload);

  const response = yield call([api, "get"], url);

  yield call(successHandler, response, GET_SPACES.success);
}

function* getApps({ payload }) {
  const url = convertParamsToString(printRequest.APPS, payload);

  const response = yield call([api, "get"], url);

  yield call(successHandler, response, GET_APPS.success);
}

export default function* printSaga() {
  yield takeLatest(
    GET_ORGANISATIONS.request,
    safeSaga(getOrganisations, GET_ORGANISATIONS.error)
  );
  yield takeLatest(GET_SPACES.request, safeSaga(getSpaces, GET_SPACES.error));
  yield takeLatest(GET_APPS.request, safeSaga(getApps, GET_APPS.error));
  yield takeLatest(
    GET_TEMPLATES.request,
    safeSaga(getTemplates, GET_TEMPLATES.error)
  );
  yield takeLatest(
    CREATE_TEMPLATE.request,
    safeSaga(createTemplate, CREATE_TEMPLATE.error, true)
  );
  yield takeLatest(
    DELETE_TEMPLATE.request,
    safeSaga(deleteTemplate, DELETE_TEMPLATE.error)
  );
}
