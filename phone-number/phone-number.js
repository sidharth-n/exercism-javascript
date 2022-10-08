//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (no) => {
  const specialChars = /[`!@#$%^&*_\=\[\]{};':"\\|,<>\/?~]/;
  const alpha = /[a-zA-Z]/;
  if (specialChars.test(no)) throw new Error('Punctuations not permitted');
  if (alpha.test(no)) throw new Error('Letters not permitted');
  const check = (no) =>{
    if (no[0]==0) throw new Error('Area code cannot start with zero');
    if (no[0]==1) throw new Error('Area code cannot start with one');
    if (no[3]==0) throw new Error('Exchange code cannot start with zero');
    if (no[3]==1) throw new Error('Exchange code cannot start with one');
    return no;
  }
  let newNum = no.replace(/[^0-9]/g,'');
  console.log(newNum);
  if (newNum.length <10) throw new Error('Incorrect number of digits');
  if (newNum.length >11) throw new Error('More than 11 digits');
  if (newNum.length == 11){
  if (newNum[0] ==1 ) {
    newNum = newNum.replace('1','');
  check(newNum);}
  else throw new Error('11 digits must start with 1');
}
  if (newNum.length == 10){check(newNum)};
  return newNum;
};
