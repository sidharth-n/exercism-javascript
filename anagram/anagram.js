//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,candidate) => {
  let anagrams = [];
for (let i of candidate){
  if (((i.toLowerCase() !== target.toLowerCase()) && (i.toLowerCase().split('').sort().join('') == target.toLowerCase().split('').sort().join(''))))
 anagrams.push(i);
}
return anagrams;
}
