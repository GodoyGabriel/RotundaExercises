const { configSV } = require("./config/configSV");
require("dotenv").config();
const app = require("./app");

app.listen(configSV.port, () => {
  console.info("****Preparing server****");
  const uriSV = process.env.npm_config_production
    ? process.env.HEROKU_URI
    : `http://${configSV.hostname}:${configSV.port}`;
    console.info(`Server running at ${uriSV}`);
});