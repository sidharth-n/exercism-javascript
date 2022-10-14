export class Allergies {
  aller = {
    1 : 'eggs',
    2 : 'peanuts',
    4 : 'shellfish',
    8 : 'strawberries',
    16 : 'tomatoes',
    32 : 'chocolate',
    64 : 'pollen',
    128 : 'cats'
  }
  constructor(score) {
   this.score = score;
    this.list1 = [];
    this.temp = [];
  }

  list() {
    console.log(this.score);
    for (let i =10;i>-1;i--){
  if(this.score - 2**i >= 0){
this.temp.push(2**i);
this.score = this.score-(2**i);
}
}
for(let val of this.temp){
for(let key in this.aller){
  if (val == +key)
  this.list1.push(this.aller[key])
}

}
console.log(`list is ${this.list1}`)
    return this.list1.reverse();
  }

  allergicTo(x) {
   this.list();
    return ((this.list1).includes(x)); 
  }
}
