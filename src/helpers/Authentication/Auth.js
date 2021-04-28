import { authConnector } from "../../services/auth";

export const authorizePodio = (callback_url) => {
  localStorage.setItem("auth_type", "podio");
  window.location.href = `https://podio.com/oauth/authorize?client_id=sync-protocol&redirect_uri=${callback_url}&scope=global:all&response_type=token`;
};

export const authConnect = async (code, auth_type) => {
  if (auth_type !== null && auth_type !== "null") {
    const data = `?provider=${auth_type}&code=${code}`;
    let response = await authConnector(data);

    localStorage.removeItem("auth_type");
    return response;
  }

  return true;
};

export const authV2Connect = async (access, auth_type) => {
  if (!auth_type) return;
  const ref_id = access.user_id;
  const access_token = access["access_token"];
  const refresh_token = access["refresh_token"];
  const expires_in = access["expires_in"];
  const data = `?code=codePodio&provider=podio&the_type=hashString&ref_id=${ref_id}&access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`;
  let response = await authConnector(data);

  localStorage.removeItem("auth_type");
  return response;
};
