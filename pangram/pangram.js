//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
export const isPangram = (senten) => {
let s = new Set();
for (let i =0;i<senten.length;i++){
  s.add(senten[i].toLowerCase())
}
console.log(s.size);
let siz = s.size;
for (let i =0;i<letters.length;i++){
  s.add(letters[i])
}
console.log(s.size);
if (siz == s.size){
  return true;
}
else return false;
};