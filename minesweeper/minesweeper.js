export const annotate = (input) => {
let arr = input.map(x => x.split(''));
let sum=0;
for(let item of arr){
for(let x of item){
    if(x == ' '){
if((item[(item.indexOf(x)+1)]??'q')=='*')sum++;
if((item[(item.indexOf(x)-1)]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)+1)]!==undefined)if((arr[(arr.indexOf(item)+1)][item.indexOf(x)]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)+1)]!==undefined)if((arr[(arr.indexOf(item)+1)][item.indexOf(x)-1]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)+1)]!==undefined)if((arr[(arr.indexOf(item)+1)][item.indexOf(x)+1]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)-1)]!==undefined)if((arr[(arr.indexOf(item)-1)][item.indexOf(x)]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)-1)]!==undefined)if((arr[(arr.indexOf(item)-1)][item.indexOf(x)-1]??'q')=='*')sum++;
if(arr[(arr.indexOf(item)-1)]!==undefined)if((arr[(arr.indexOf(item)-1)][item.indexOf(x)+1]??'q')=='*')sum++;
arr[arr.indexOf(item)][item.indexOf(x)] = sum  ;sum= 0;
 }
}
}
return arr.map(x => x.join('').replace(/[0]/g,' '));
};
