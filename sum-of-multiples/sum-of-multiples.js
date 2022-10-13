export const sum = (arr,li) => {
 let set = new Set();
 for (let i =1;i<li;i++){
  for(let x of arr) if(i%x==0)set.add(i);
}
return [...set].reduce((acc,curr)=>acc+=curr,0);
};
