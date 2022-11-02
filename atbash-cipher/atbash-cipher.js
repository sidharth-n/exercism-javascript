export const substitute =(x)=> {
    if(/[0-9]/g.test(x))return x;
    return String.fromCharCode(122-(x.charCodeAt(0)-97))
}

export const encode = (message) => {
    let splice_pos=1;
  message = message.replace(/[^\w]/g,'').toLowerCase().split('');
  
  for(let i=0;i<message.length;i++){
    message[i]=substitute(message[i]);
  }
  
  for(let i=0;i<message.length;i++){
    if((i+1)%5==0){message.splice(i+splice_pos,0,' ');splice_pos++;}
  }
  
  return message.join('').trim();
  
};

export const decode = (message) => {
    message = message.replace(/\s/g,'').split('');

    for(let i=0;i<message.length;i++){
        message[i]=substitute(message[i]);
      }

    return message.join('');
  
  };
