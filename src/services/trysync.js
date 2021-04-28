import { Routes } from "../constants/Routes";
import axios from "axios";

export const syningcOrg = async (token, name, id) => {
  return await axios({
    method: "post",
    url: `${Routes.syncAnOrganization}${token}&org_id=${id}&org_name=${name}`,
  })
    .then((res) => {
      return {
        isLoading: !res.data,
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        isLoading: !err.response,
        status: err.response,
        message: err.response,
      };
    });
};

export const syningStatusFromFirebase = async (orgId, db_name) => {
  return await axios({
    method: "post",
    url: `${
      Routes.getSyncingStatusFromFireBase
    }${db_name.toLowerCase()}/sync/podio/${orgId}.json`,
  })
    .then((res) => {
      return {
        isLoading: !res.data,
        status: res.data.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        isLoading: !err.response,
        status: err.response,
        message: err.response,
      };
    });
};
