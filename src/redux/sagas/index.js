import { all } from "redux-saga/effects";
import testSaga from "./test";
import userSaga from "./users";
import rawDataSaga from "./rawData";
import printSaga from "./print";

export default function* rootSaga() {
  yield all([testSaga(), userSaga(), rawDataSaga(), printSaga()]);
}
