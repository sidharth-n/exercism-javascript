
export const largestProduct = (input,num) => {
  if(num<0) throw new Error('Span must be greater than zero');
  if((/[^0-9]/).test(input)) throw new Error('Digits input must only contain digits');
  if(input.length<num) throw new Error('Span must be smaller than string length');
  if(!num && !input.length) return 1;
  let x = [...input].map(x=>+x).map((xx,index,input) => input.slice(index,index+num)).filter(x => x.length === num);
  let max =[],temp=1;
  for (let key of x){
    temp = key.reduce((prev,curr) => prev*curr,1);
    max.push(temp);
  }
return Math.max(...max);
}
