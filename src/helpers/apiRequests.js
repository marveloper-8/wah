import { put } from "redux-saga/effects";
// import { toast } from "react-toastify";
import toaster from "toasted-notes";
import { logout } from "../redux/actions/auth";
// This file contains helper methods that make working with the API a lot easier

// Originally got this idea from [Chima Chukwuemeka](https://twitter.com/chukwuemekachm).
// Although I have improved it since.
export function* errorHandler(error, errorType) {
  if (error.response) {
    if (error.response.status === 401) {
      // TODO: handle auth errors and log out user
      yield put(logout());
    }

    if (error.response.data && error.response.data.message) {
      const errors = error.response.data.message;

      toast(errors);
      yield put({
        type: errorType,
        payload: { errors },
      });
    }

    return null;
  } else if (error.request) {
    // TODO: handle network errors
    //  This could be due to the user's browser being offline or our servers being down
    //  This occured when the URL I sent was undefined
    //  This also occured when the server is offline. I guess advising the user to check their
    //  or contact support if the problem persists is appropriate
    yield put({
      type: errorType,
      payload: {},
    });
    // yield toast.error("Poor internet connection");
    // toast.info("Please check your internet connection.");
  } else {
    // TODO: should we leave this handler? It's rare and means the code is faulty so the request was never step up
    //   We could just tell the user here that there was an unknown error that they should contact support
  }
}

export function* successHandler(response, actionType, customMessage) {
  const data = yield response.data;

  if (customMessage && response.status >= 200 && response.status < 299) {
    if (typeof customMessage === "string") {
      // toast.success(customMessage);
      toast(customMessage);
    } else if (data.message) {
      toast(customMessage);
      // toaster.notify(customMessage, {
      //   duration: 4000,
      //   position: "bottom",
      // });
      // toast.success(data.message);
    }
  }

  yield put({
    type: actionType,
    payload: data,
  });
}

export const toast = (message) => {
  toaster.notify(message, {
    duration: 4000,
    position: "bottom",
  });
};
