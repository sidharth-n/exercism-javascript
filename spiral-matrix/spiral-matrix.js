export const spiralMatrix = (n) => {
  if(n==0)return [];
  function r_add(num){
    return num+=1; 
  }
  function l_add(num){
    return num+=10;
  }
  function r_min(num){
    return num-=1;
  }
  function l_min(num){
   return num-=10;
  }
  let pos=[11];let x = pos[0];
  for(let i=0;i<=n*n;i++){
    while(x%10<n){
      x= r_add(x);
      if(!pos.includes(x)){pos.push(x);}
    }x=pos[pos.length-1];
    while(Math.trunc(x/10)<n){
      x= l_add(x);
      if(!pos.includes(x)){pos.push(x);}
    }x=pos[pos.length-1];
    while(x%10>1){
      x= r_min(x);
      if(!pos.includes(x)){pos.push(x);}
    }x=pos[pos.length-1];
    while(Math.trunc(x/10)>1){
      x= l_min(x);
      if(!pos.includes(x)){pos.push(x);} 
    }x=pos[pos.length-1];
  }
  let mat = [...Array(n)].map(e => Array(n).fill(0));
    for(let j=0;j<pos.length;j++){
      mat[(Math.trunc(pos[j]/10)-1)][(pos[j]%10-1)]=j+1;
    }
  return mat;
};
