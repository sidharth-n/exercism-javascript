//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...arr) => {
  let temp ='';
  if(!arr.length)return '';
  if((typeof arr[arr.length-1]) === 'string'){
  for(let i =0;i<arr.length-1;i++){
    temp+=`For want of a ${arr[i]} the ${arr[i+1]} was lost.` +'\n';
  }
  return(temp+`And all for the want of a ${arr[0]}.` )
  }
  else{
    for(let i =0;i<arr.length-2;i++){
    temp+=`For want of a ${arr[i]} the ${arr[i+1]} was lost.` +'\n';
  }
  return(temp+`And all for the want of a ${arr[arr.length-1].qualifier} ${arr[0]}.` )
  }
  
};
