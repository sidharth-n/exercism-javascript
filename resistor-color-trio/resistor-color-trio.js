export class ResistorColorTrio {
   constructor(colors) {
   this.colors = colors;
   this.obj = {
    'black',
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white
  };
  }
  get label() {
   let x= (this.obj[this.colors[0]]??'xx')*10+(this.obj[this.colors[1]]??'xx');
   if(isNaN(x))throw new Error('/invalid color/')
   let value = x+'0'.repeat(this.obj[this.colors[2]]);
   let unit = 'ohms';
   if(Number.isInteger(value/1000)){value/=1000;unit = 'kiloohms'}
   return `Resistor value: ${value} ${unit}`
  }
}