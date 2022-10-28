export const tournamentTally = (sen='') => {
let title = 'Team                           | MP |  W |  D |  L |  P\n';
  if(sen=='')return title.trim();
let obj ={}
sen = sen.split('\n');
for(let sent of sen){
sent=sent.split(';');
if(!((sent[0]) in obj))obj[sent[0]]=[0,0,0,0,0];
if(!((sent[1]) in obj))obj[sent[1]]=[0,0,0,0,0];
switch(sent[2]){
  case 'win':{obj[sent[0]][0]+=1;
    obj[sent[0]][1]+=1;
    obj[sent[0]][4]+=3;
    obj[sent[1]][0]+=1;
    obj[sent[1]][3]+=1;
    break;}
case 'loss':{obj[sent[0]][0]+=1;
  obj[sent[0]][3]+=1;
  obj[sent[1]][4]+=3;
  obj[sent[1]][0]+=1;
  obj[sent[1]][1]+=1;
  break;}
  case 'draw':{obj[sent[0]][0]+=1;
    obj[sent[0]][2]+=1;
    obj[sent[0]][4]+=1;
    obj[sent[1]][4]+=1;
    obj[sent[1]][0]+=1;
    obj[sent[1]][2]+=1;
    break;}
}}
let arr =[];
for(let key in obj){
  arr.push([key,obj[key]])
}
arr.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });
  arr.sort(function(a, b) {
    return b[1][4]-a[1][4] ;
  });

for(let key in arr){
title+=`${arr[key][0].padEnd(31,' ')}|  ${arr[key][1][0]} |  ${arr[key][1][1]} |  ${arr[key][1][2]} |  ${arr[key][1][3]} | ${arr[key][1][4]>10?arr[key][1][4]:(arr[key][1][4]).toString().padStart(2,' ')}\n`
}
return title.trim();
};
