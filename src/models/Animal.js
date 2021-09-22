const sounds = ["grr", "agrr", "suck", "bgrr", "raarr", "auch", "eff", "oinc"];

 class Animal {
  constructor(data) {
    this.animalType = data.animalType;
    this.speakType = data.speakType;
  }

  /**
   * @description Connect the animal's speak with random sounds.
   * @return {string} Returns the sound that the animal makes.
   **/
  speak() {
    const randomSound = sounds[Math.floor(Math.random()*sounds.length)];
    let speakArray =  this.speakType.split(" ");
    speakArray.forEach((word, i) => {
      speakArray[i] = `${word} ${randomSound}`;
    })
    const speakWithSound = speakArray.join(" ")
    return speakWithSound;
  }

  getAnimalType() {
    return this.animalType;
  }
  getSpeakType() {
    return this.speakType;
  }
}

module.exports = Animal;