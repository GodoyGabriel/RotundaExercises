const Animal = require("../models/Animal");

class ZooModel {
  /**
   * @param {string} animalType Is a type of animal.
   * @param {string} speakType Is a speak of animal.
   * @return {object} Return sound of animal.
   **/
  newSpecies = ({ animalType, speakType }) => {
    let response = { status: 200, data: "" };
    if (animalType && speakType) {
      const newAnimal = new Animal({ animalType, speakType });
      response.data = newAnimal.speak();
    } else {
      response.status = 400;
      response.data = `The animalType and speakType parameters are required`;
    }
    return response;
  };
}

module.exports = new ZooModel();
