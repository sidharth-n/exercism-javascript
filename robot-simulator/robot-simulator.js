export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor(){
    this.darray = ['north','east','south','west'];
    this.dir = 'north';
    this.x = 0;
    this.y =0;
  }
  get bearing() {
    return this.dir;
  }

  get coordinates() {
    return [this.x,this.y];
  }

  place(obj) {
    if (!this.darray.includes(obj.direction)) throw new InvalidInputError('Invalid Direction !!');
    this.dir = obj.direction;
    this.x = obj.x;
    this.y = obj.y;
  }

  evaluate(instructions) {
    for(let i=0;i<instructions.length;i++){
    switch(instructions[i]){
      case 'R': {
        this.dir = this.darray[this.darray.indexOf(this.dir)+1]?? this.darray[0];break;
      }
        case 'L': {
        this.dir = this.darray[this.darray.indexOf(this.dir)-1]?? this.darray[this.darray.length-1];break;
      }
         case 'A': {
          switch(this.dir){
            case 'north': {this.y++}break;
              case 'south': {this.y--}break;
              case 'east': {this.x++}break;
              case 'west': {this.x--}break;
          }
      }
    }
  }
  }
}
