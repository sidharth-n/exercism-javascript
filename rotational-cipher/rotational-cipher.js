export const rotate = (str,num) => {
  function asci(char,num1){
    if(num>=26)num=num-26;
    if(char.charCodeAt(0)<=90){
      if((char.charCodeAt(0)+num)>90) return 64 + (num-(90-char.charCodeAt(0)));
      else return char.charCodeAt(0) +num;
    }
    else {
      if((char.charCodeAt(0)+num)>122) return 96+ (num-(122-char.charCodeAt(0)));
      else return char.charCodeAt(0) +num;
    }
  }
  
  str = str.split('');
   for (let ind in str){
     if (/[A-Za-z]/g.test(str[ind])){
       str[ind] = String.fromCharCode(asci(str[ind],num));}
   }
   return str.join('');
 };
