export const primes = (num) => {
  const set = new Set();
for(let i=2;i<=num;i++){
  set.add(i)
}
for(let i=2;i<=num;i++){
if(set.has(i))
{
  let j=i;
  while(j<=num){
    j+=i;
    set.delete(j);
  }
}
}
return [...set];
};
