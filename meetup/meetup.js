export const meetup = (yr,mo,x,da) => {
 let teenth = [13,14,15,16,17,18,19];
 let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let dates =[];
for(let i=1;mo!=2?i<32:yr%4==0?i<30:i<29;i++){
  if(days[new Date(yr,mo-1,i).getDay()] == da)
  dates.push(i);
}
  switch(x){
    case 'first': return new Date(yr,mo-1,dates[0]);
      case 'second': return new Date(yr,mo-1,dates[1]);
      case 'third': return new Date(yr,mo-1,dates[2]);
      case 'fourth': return new Date(yr,mo-1,dates[3]);
      case 'last': return new Date(yr,mo-1,dates[dates.length-1]);  
      case 'teenth': {
        for(let key of teenth){
  if(dates.includes(key))
  return new Date(yr,mo-1,key)
      };   
  }}  
};
