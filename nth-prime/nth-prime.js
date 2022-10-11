//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (n) => {
  if (!n) throw new Error('there is no zeroth prime');
  let num =0;
  const isPrime=(x)=>{
    for (let i=2;i<x;i++){
      if(x%i == 0) return false;
    }
    return x;
  }
for (let x=2;x<Infinity;x++){
  if (!n)break;
  else if(Number(isPrime(x))){num = isPrime(x);n--};
}
return num;
};
