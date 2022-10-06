//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(no) {
    this.no = no;
  }

  get sumOfSquares() {
    let c =0;
    for(let i=1;i<=this.no;i++) c+=(i*i);
    return c;
  }

  get squareOfSum() {
    let c =0;
    for(let i=1;i<=this.no;i++) c+=i;
    return c*c;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
