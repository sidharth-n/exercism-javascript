export const score = (word) => {
  let count =0;
  const obj = {
    AEIOULNRST : 1, 
    GD : 2,
    BCMP : 3,
    FHVWY : 4,
    K: 5,
    JX : 8,
    QZ : 10
  }
  for(let i=0;i<word.length;i++){
  for(let keys in obj){
    for(let j=0;j<keys.length;j++){
      if(word[i].toUpperCase()==keys[j])
      count += obj[keys];
    }
  }
  }
  return count;
};