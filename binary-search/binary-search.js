export const find = (arr,num) => {
let x=0;let mid=-1;
if(num>arr.slice(-1)||num<arr[0])throw new Error('Value not in array')
  function find_index(start,end){
    if(mid==Math.floor((start+end)/2))throw new Error('Value not in array')
    mid = Math.floor((start+end)/2);
    if(arr[mid]>num) return find_index(start,mid);
      if(arr[mid]<num) return find_index(mid,end);
       return mid;
  }
  return find_index(0,arr.length)
};
