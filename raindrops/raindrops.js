//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (no) => {
  let string = '';
  if(!(no%3) || !(no%5) || !(no%7)){
  if (!(no%3)) string+='Pling';
  if (!(no%5)) string+='Plang';
  if (!(no%7)) string+='Plong';}
  else string = no.toString();
  return string;
};
