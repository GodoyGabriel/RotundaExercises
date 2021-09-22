class ErrorAlarmModel {
  constructor() {
    this.errors = 0;
    this.timeToEmail = true;
  }

  sumErrors = () => {
    this.errors += 1;
  };

  resetErrors = () => {
    this.errors = 0;
  };

  emailSent = () => {
    this.timeToEmail = false;
  };

  resetTimeToEmail = () => {
    this.timeToEmail = true;
  }

  errorAlarm = async () => {
    let response = { status: 200, data: "Errors Saved" };
    for (let i = 0; i < 60; i++) {
      this.logError(`ERROR TO SAVE`);
      await this.sleep(1000);
    }
    this.resetTimeToEmail();
    return response;
  };

  /**
   * @description Save the error in a file and send an email every 1 minute if more than 10 errors accumulate.
   * @param {string} error Error to save.
   * @return {Void}
   **/
  logError = (error) => {
    this.sumErrors();
    console.log("The error is added in the file");
    if (this.errors > 10 && this.timeToEmail) {
      console.log("The mail with the error file is sent");
      this.emailSent();
      this.resetErrors();
    }
  };

  /**
   * @description Sleep the process.
   * @param {object} ms Milliseconds of delay.
   * @return {Void}
   **/
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = new ErrorAlarmModel();
