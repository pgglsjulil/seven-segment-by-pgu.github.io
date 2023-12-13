class About extends Me {
  constructor() {
    this.name = "Ady Ulil Amri";
    this.pronouns = "He" | "Him";
    this.address = "Bulukumba, Sulawesi Selatan, Indonesia";
    this.school = "Hasanuddin University";
  }

  function getDescriptions(){
    return `Hi, my name is ${this.name}, currently I am a student at ${this.school}`;
  }

  function getFutureGoal(){
    return "To be a person who benefits others";
  }
}
