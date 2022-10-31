export const rows = (letter) => {
  let x = (letter.charCodeAt(0)-64);x=2*x-1; let y =Math.floor(x/2);
 let ar = Array(x).fill(' ');
 let final = [];
 ar[y]='A';
 ar =ar.join('')
 final.push(ar);
 for(let i=1;i<(x+1)/2;i++){
  ar = Array(x).fill(' ');
   ar[y+i]=String.fromCharCode(65+i);ar[y-i]=String.fromCharCode(65+i);
   ar =ar.join('');
   final.push(ar);
 }
 return final.concat(final.slice(0,-1).reverse());
 };