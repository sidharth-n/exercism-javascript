export const translate = (word) => {
  let arr=[];
  if(word.split(' ').length>1){for(let i=0;i<word.split(' ').length;i++) arr.push(translate(word.split(' ')[i]));return arr.join(' ');}
  else{
    word=word.split('');
  if(/[aeiou]/.test(word[0])||word.slice(0,2).join('')=='xr'||word.slice(0,2).join('')=='yt')word.push('ay');
    else if(word[0]=='y'){word.push(word.slice(0,1).join(''),'ay');word=word.slice(1)}
  else{
    for(let w=0;w<word.length;w++){
      if(/[aeiouy]/.test(word[w])){
        if(word[w]=='u'&&word[w-1]=='q'){word.push(word.slice(0,w+1).join(''),'ay');word=word.slice(w+1);break;}
        word.push(word.slice(0,w).join(''),'ay');word=word.slice(w);break;
      }
    }
  }
  return word.join('');}
};

