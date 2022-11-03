export class List {
  constructor(arr) {
    this.values = arr || [];
  }

  append(list2) {
    for(let val of list2.values){
      this.values.push(val);
    }
    return this;
  }

  concat(listOfLists) {
    for(let val of listOfLists.values){
      this.append(val);
    }
    return this;
  }

  filter(fn) {
    let new_list =[];
    for(let val of this.values){
      if(fn(val))new_list.push(val);
    }
    return new List(new_list);
  }

  map(fn) {
    for(let i=0;i<this.length();i++){
      this.values[i]=fn(this.values[i])
    }
    return this;
  }

  length() {
    let count =0;
    for(let val in this.values){
      count++;
    }
    return count;
  }

  foldl(fn,acc) {
    for(let val of this.values){
      acc=fn(acc,val)
    }
    return acc;
  }

  foldr(fn,acc) {
    for(let i=this.length()-1;i>=0;i--){
      acc=fn(acc,this.values[i])
    }
    return acc;
  }

  reverse() {
    let reverse_array =[];
    for(let i=0;i<this.length();i++){
      reverse_array.push(this.values[this.length()-(i+1)])
    }
    return new List(reverse_array);
  }
}
