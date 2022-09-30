//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return [...dna].reduce((acc,x) => {
switch(x){
  case 'G' : acc.push('C');break;
    case 'C' : acc.push('G');break;
    case 'T' : acc.push('A');break;
    case 'A' : acc.push('U');break;
    default : acc.push(x);
}  return acc; 
  },[]).join('').toString();
};
