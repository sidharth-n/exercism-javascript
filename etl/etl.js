//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let newObj = {};
  for(let [key,val] of Object.entries(old)){
  for(let i = 0;i<val.length;i++){
    val[i] = val[i].toLowerCase();
  newObj[val[i]] = +key;
  }}
  return newObj;
};
