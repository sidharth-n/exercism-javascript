export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];
function nth_line(n){
   let ar =[];
   if(n==0){ar.push(`No more bottles of beer on the wall, no more bottles of beer.`,`Go to the store and buy some more, 99 bottles of beer on the wall.`);return ar;}
  ar.push(`${n==1?n+' bottle':n +' bottles'} of beer on the wall, ${n==1?n+' bottle':n +' bottles'} of beer.`,`Take ${n==1?'it':'one'} down and pass it around, ${n-1==0?'no more bottles':n-1==1?n-1+' bottle':n-1 +' bottles'} of beer on the wall.`)
  return ar;
}
for(let i=0;i<takeDownCount;i++){
lyrics.push(...nth_line(initialBottlesCount-i));lyrics.push('');
}
lyrics.pop();
return lyrics;
}
