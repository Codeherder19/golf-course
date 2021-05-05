class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = []
  }
  checkInGroup(party) {
    if (party.length <= this.openings) {
    for (var i = 0; i < party.length; i++) {
      this.currentlyPlaying.unshift(party[i].name);
      this.openings -= party.length;
      }
    } console.log(this.currentlyPlaying)
  }
}


module.exports = GolfCourse;
