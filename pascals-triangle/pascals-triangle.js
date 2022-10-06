//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (no) => {
  let arr2 = [];
function fact(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * fact(n-1);
    }
}
function comb(n,x){
    let c = fact(n)/(fact(n-(x-1))*fact(x-1));
    return c;
}
 function nthRow(n){
   let arr1 = [1];
   n--;
    for(let i =0;i<n;i++)
    arr1.splice(arr1[i],0,comb(n,i+1));
    return arr1;
  }
    for (let i =1;i<=no;i++){
      arr2.push(nthRow(i))
    }
  return arr2;
};
