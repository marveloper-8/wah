import { call } from "redux-saga/effects";
import { errorHandler } from "./apiRequests";

export default function safeSaga(func, actionType) {
  return function* (args) {
    try {
      yield* func(args);
    } catch (err) {
      yield call(errorHandler, err, actionType);
    }
  };
}
