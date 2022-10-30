export const keep = (ar,fn) => {
let arr =[]
  for(let x of ar){
    if(fn(x))arr.push(x)
  }
  return arr;
  
};

export const discard = (ar,fn) => {
  let arr =[]
  for(let x of ar){
    if(!fn(x))arr.push(x)
  }
  return arr;
  };
