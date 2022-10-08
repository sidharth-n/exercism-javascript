//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (array)=>{
  let x = '';
  let colArray =[];
  if (!array.length) return array;
 let len =array[0].length;
 for (let i of array){
if (i.length>len) len = i.length;
 }
 for (let i=0;i<array.length;i++){
  array[i] = array[i].padEnd(len,' ');
   }
let newArray = array.join('').trim();
for (let i=0;i<newArray.length/array.length;i++){
  for(let j=i;j<(newArray.length);j+=len){
 x = x + newArray[j];
}
  if(i==(len-1))x= x.trimEnd();
colArray.push(x);
x='';
}
return colArray;
}
