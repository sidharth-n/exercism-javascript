export class HighScores {
  constructor(score) {
    this.score=score;
  }
  get scores() {
    return this.score;
  }

  get latest() {
    return this.score[this.score.length-1]
  }

  get personalBest() {
    return Math.max(...this.score)
  }

  get personalTopThree() {
    return this.score.sort((a,b)=>a-b).reverse().slice(0,3)
  }
}
