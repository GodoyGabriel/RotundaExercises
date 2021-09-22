const ZooModel = require("../models/ZooModel");
const UrlParserModel = require("../models/UrlParserModel");
const ErrorAlarmModel = require("../models/ErrorAlarmModel");

class exercisesController {
  /**
   * @description Extracts the variable parts of a url into a hash.
   * @param {object} req Obtains from the body the url to be analyzed.
   * @return {object} Returns the object with its respective key value.
   **/
  url_parser = async (req, res) => {
    console.info("POST: /url_parser");
    let response = await UrlParserModel.urlParser(req.body);
    return res.status(response.status).json(response.data);
  };

  /**
   * @description Building a zoo.
   * @param {object} req Obtains from the body the anymalType and speakType.
   * @return {object} Return how the animal talks.
   **/
  zoo = async (req, res) => {
    console.info("POST: /zoo");
    let response = await ZooModel.newSpecies(req.body);
    return res.status(response.status).json(response.data);
  };

  /**
   * @description 
   * @return {object} 
   **/
  error_alarm = async (req, res) => {
    console.info("GET: /error_alarm");
    let response = await ErrorAlarmModel.errorAlarm();
    return res.status(response.status).json(response.statistics);
  };
}

module.exports = new exercisesController();
