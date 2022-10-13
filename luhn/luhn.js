export const valid = (num) => {
  if(/[^0-9\s]/g.test(num)) return false
  num = num.replace(/[^0-9]/g,'').split('').map(val => +val);
  if(num.length==1 && num[0]==0) return false;
  for (let i=(num.length-2);i>=0;i-=2)
  num[i] = (num[i]*2)<=9? num[i]*2:(num[i]*2)-9;
  return !Boolean((num.reduce((acc,curr) => acc+=curr,0))%10);
};
