export const knapsack = (maximumWeight, items=[]) => {
  if(!items.length)return 0;
 items=items.map((x,i)=> [items[i].weight,items[i].value]);
 function getSubArrays(arr){
  if (arr.length === 1) return [arr];
  else {
  	let subarr = getSubArrays(arr.slice(1));
  	return subarr.concat(subarr.map(e => e.concat([arr[0]])), [[arr[0]]]);
  }
}
items = getSubArrays(items);
items =items.filter((val,ind,arr)=> val.reduce((ac,vl)=>ac+vl[0],0)<=maximumWeight);
items = items.map(y=> y.reduce((ac,val)=>ac+val[1],0));
if(!items.length)return 0;
return Math.max(...items);
};
