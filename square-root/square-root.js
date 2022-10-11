export const squareRoot = (num) => {
  let odd =1; let count =0;
while(num!==0){
  num = num - odd;
  odd+=2;
  count++;
}
  return count;
};



//This solution also works, but not in exercism. It's an example of recursive function.
/*let odd =1; let count = 0;
export const squareRoot = (num) => {
  if (num == 0 ) return count;
  num = num - odd;
  odd+=2;
  count++;
  return squareRoot(num);
};*/