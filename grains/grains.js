export const square = (n) => {
  if(n<1||n>64) throw new Error('square must be between 1 and 64');
 return BigInt(2**(n-1));
};

export const total = () => {
  let total =0n;
  for(let i=0n;i<64n;i++){
    total+=2n**i;
  }
  return total;
};
