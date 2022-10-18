export const isValid = (code) => {
  let sum=0;
   code = code.replace(/[^0-9X]/g,'')
   if(code.length !==10)return false;
   if(code.slice(-1)=='X'){
    code = code.slice(0,-1);
    for(let i=10;i>1;i--){
        sum+=i*(+code[10-i]);console.log(sum);
        
    }
    sum+=10;
    sum%=11;
    return !sum;
   }
   else{
     code = code.replace(/[X]/g,'');
     if(code.length !==10)return false;
    for(let i=10;i>0;i--){
        sum+=i*(+code[10-i]);console.log(sum);
        
    }
    sum%=11;
    return !sum;
   }
};

