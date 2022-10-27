let pri = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen']
let sec = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
export const say = (no) => {
  if(no<0||no>999999999999)throw new Error('Number must be between 0 and 999,999,999,999.');
  if(no==0)return 'zero';
  let result ='';
  function three_digit(num){
    let no = '';let n=num.toString().split('');
    if(Boolean(Math.trunc(num/100))){no=`${pri[Math.trunc(num/100)]} hundred `;
    n=n.slice(1);}
    if(n[(n.length-1)-1]=='1')return no+=`${pri[+n.join('')]}`
    no+=`${sec[n[n.length-2]-2]}-${pri[n[n.length-1]]}`;
    no=no.replace('undefined','');
    if(no[no.length-1]=='-'||no[0]=='-')no=no.replace('-','');
    return no;
};
if(Math.trunc(no/1000000000)!==0){
  let num = Math.trunc(no/1000000000);
  result +=`${three_digit(num)} billion ` 
  no=no-num*10**9
}
if(Math.trunc(no/1000000)!==0){
  let num = Math.trunc(no/1000000);
  result +=`${three_digit(num)} million ` 
  no=no-num*10**6
}
if(Math.trunc(no/1000)!==0){
  let num = Math.trunc(no/1000);
  result +=`${three_digit(num)} thousand ` 
  no=no-num*10**3
}
result +=`${three_digit(no)}` 
return result.trim();
}
