export const commands = (num) => {
  let mode =0;
  let result = [];
  const obj ={
    1: 'wink',
    2: 'double blink',
    4 : 'close your eyes',
    8 : 'jump'
  }
if(num==16) return [];
if(num>16){num-=16;mode=1;}
  for (let i=3;i>-1;i--){
    if(num>=(2**i)){
      result.push(obj[2**i]);
      num-=(2**i)
    }
  }
  if(mode==0)return result.reverse();
  return result;
  };
