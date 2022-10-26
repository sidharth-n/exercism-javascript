export const isPaired = (str) => {
  str = str.replace(/[^({[\]})]/g,'').split('');
  let len=str.length;
  for(let i=0;i<len;i++){
  for(let s=0;s<str.length;s++){
    switch(str[s]){
      case '(':{
      if(str[s+1]==')'){str.splice(s,2)};break;
      }
      case '{':{
        if(str[s+1]=='}'){str.splice(s,2)};break;
        }
        case '[':{
          if(str[s+1]==']'){str.splice(s,2)};break;
          }
    }
  }}
  return !Boolean(str.length);
};
