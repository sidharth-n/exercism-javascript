//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
    this.isTraingle = isTraingle(...sides);
    
    function isTraingle (...sides) {
    if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) return false;
    else if (
      sides[0] + sides[1] >= sides[2] &&
      sides[0] + sides[2] >= sides[1] &&
      sides[1] + sides[2] >= sides[0]
    ) return true;
    else return false;
  };
  }
  get isEquilateral() {
    if(this.isTraingle)
    return (new Set([this.side1,this.side2,this.side3]).size ==1)
    else return false;
  }

  get isIsosceles() {
    if(this.isTraingle)
    return(new Set([this.side1,this.side2,this.side3]).size ==2) || (new Set([this.side1,this.side2,this.side3]).size ==1)
    else return false;
  }

  get isScalene() {
    if(this.isTraingle)
    return ((new Set([this.side1,this.side2,this.side3]).size ==3)&& this.isTraingle)
    else return false;
}
}