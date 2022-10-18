export const primeFactors = (num) => {
  let p =2;
  let prime =[];
  while(num!==1){
  if(num%p == 0){
    num = num/p;
    prime.push(p);
  }
    else p++; 
  }
  return prime;
};
