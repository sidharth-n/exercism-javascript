//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
   let x = string.split(/[^a-zA-Z']/).map(word => word[0]).join('');
   return x.toUpperCase();
  };