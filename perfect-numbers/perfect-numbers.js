//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (no) => {
  let aliquotSum = 0;
  if(no<=0) throw new Error('Classification is only possible for natural numbers.')
  for (let i=1;i<no;i++){
    if(no%i == 0){
      aliquotSum+=i;
    }
  }
  return (aliquotSum == no) ? "perfect" : (aliquotSum > no) ? "abundant" : "deficient";
};
