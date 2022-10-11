//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let sum =0;
  let array = num.toString().split('');
  for (let i of array){
sum+=Math.pow(+i,array.length);
  }
  return (sum==num);
}

