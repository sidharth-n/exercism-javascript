//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) =>{
let wordArray = word.toLowerCase().split(/[^a-zA-Z']/).join('');
let wordSet = new Set(wordArray);
return (wordSet.size == wordArray.length);
}