
export class Triplet {
  constructor(a, b, c) {
    this.a=a;
    this.b=b;
    this.c=c;
  }

  toArray() {
    return [this.a,this.b,this.c];
  }
}
export function triplets(x) {
    let array =[];
   let [max,min,sum] = [x.maxFactor||Infinity,x.minFactor||-Infinity,x.sum] ;
    for(let i=1;i<sum;i++){
        for(let j=i;j<sum;j++){
            if((i+j+Math.sqrt(i**2+j**2)==sum)&&(i<=max&&i>=min)&&(j<=max&&j>=min)&&(Math.sqrt(i**2+j**2)<=max&&Math.sqrt(i**2+j**2)>=min))
            array.push(new Triplet(i,j,Math.sqrt(i**2+j**2)))
        }
    }
return array;
  }


