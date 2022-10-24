export const answer = (str) => {
    str=str.replace(/[^\w\s-]/g,'').replace('What is','').replace(/multiplied by/g,'*').replace(/divided by/g,'/').replace(/plus/g,'+').replace(/minus/g,'-')
  str = str.split(' ');
    for(let z in str){
        if ((['+','-','*','/']).includes(str[z])){
        str.splice(1,0,'(');str.splice(5,0,')');break;}
    }
    str=str.join(' ');
  if(str=='') throw new Error('Syntax error');
    if(!(/[+-/*/\d]/g.test(str))|| /[a-z]/.test(str)) throw new Error('Unknown operation')
    try {return eval(str);}
    catch{ throw new Error('Syntax error')}

  };