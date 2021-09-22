class UrlParserModel {
  /**
   * @description Separate the value of parameters.
   * @param {string} URLFormat Describes the format of a ur.
   * @param {string} URLInstance It is the url that contains the parameters.
   * @return {object} Returns an object with the query params separated by key values.
   **/
  urlParser = async ({ URLFormat, URLInstance }) => {
    let response = { status: 200, data: "" };
    if (URLFormat && URLInstance) {
      let hashObject = {};
      const arrayUrl = URLFormat.split("/");
      const arrayInstance = URLInstance.split("/");
      arrayInstance.forEach((item, i) => {
        const keyName = arrayUrl[i].substring(1, arrayUrl[i].length);
        if (arrayUrl[i].includes(":") && !item.includes("?")) {
          hashObject[keyName] = item;
        } else if (item.includes("?")) {
          hashObject[keyName] = item.split("?")[0];
        }
      });
      const params = await this.containParams(
        arrayInstance[arrayInstance.length - 1]
      );
      const finalParams = Object.assign(hashObject, params);
      response.data = finalParams;
    } else {
      response.status = 400;
      response.data = `The URLFormat and URLInstance parameters are required`;
    }
    return response;
  };

  /**
   * @description Separate the value of parameters.
   * @param {string} urlFragment Is the last fragment of the url.
   * @return {object} Returns a clean object with its key value.
   **/
  containParams = (urlFragment) => {
    let paramsObj = {};
    if (urlFragment.includes("?")) {
      const urlParams = urlFragment.split("?")[1].split("&");
      urlParams.forEach((param) => {
        const paramKeyValue = param.split("=");
        paramsObj[paramKeyValue[0]] = paramKeyValue[1];
      });
    }
    return paramsObj;
  };
}

module.exports = new UrlParserModel();
