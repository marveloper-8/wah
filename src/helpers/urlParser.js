export function convertParamsToString(url, urlVariables) {
  let finalURL = url;

  for (const [key, value] of Object.entries(urlVariables)) {
    finalURL = finalURL.replace(`:${key}`, value);
  }

  return finalURL;
}
