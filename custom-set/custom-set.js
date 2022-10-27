export class CustomSet {
  constructor(arr) {
    this.arr = arr||[];
  }

  empty() {
    return (!this.arr.length)
  }

  contains(x) {
    return this.arr.includes(x);
  }

  add(x) {
    if(!this.arr.includes(x))this.arr.push(x);
    return this;
  }

  subset(set) {
  const len = this.arr.length;
  this.arr = this.arr.filter((el) => (set.arr.includes(el)));
  return (this.arr.length == len);
    }

  disjoint(set) {
    const len = this.arr.length;
  this.arr = this.arr.filter((el) => !(set.arr.includes(el)));
  return (this.arr.length == len);
  }

  eql(set) {
    if(this.arr.length!=set.arr.length)return false;
    this.arr = this.arr.filter((el) => (set.arr.includes(el)));
  return (this.arr.length == set.arr.length);
  }

  union(set) {
    for(let i of set.arr){
      if(!this.arr.includes(i))this.arr.push(i)
    }
    return this;
  }
  
  intersection(set) {
    let ar = [];
        for(let i of set.arr){
            for(let j of this.arr)if(i==j)ar.push(i)
        }
        return new CustomSet(ar);
  }

  difference(set) {
   this.arr = this.arr.filter((el) => !(set.arr.includes(el)));
    return this;
  }
}
