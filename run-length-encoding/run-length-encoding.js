//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let count =0;let arr =[];str = str.split('');let x = str.length;
  for(let j=0;j<x;j++){
for(let i=0;i<str.length;i++){
if(str[i]!==str[0]) {break;} else count++;}
if(count>1)arr.push(count);arr.push(str[0]);
str.splice(0,count);
count =0;
}
return arr.join('');
}

export function decode(str) {
  let groups = []
  let currentGroup = ''
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      currentGroup += str[i]
      continue
    } else if (currentGroup === '') {
      groups.push({ num: 1, letter: str[i] })
    } else if (Number(currentGroup)) {
      groups.push({ num: currentGroup, letter: str[i] })
    }
    currentGroup = ''
  }
  return groups.reduce((acc, { letter, num }) => `${acc}${letter.repeat(num)}`, '')
}
