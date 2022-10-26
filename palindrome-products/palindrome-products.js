 export class Palindromes {
    static generate(x) {
    let [max,min]=[x.maxFactor,x.minFactor];
    if(min>max)throw new Error('min must be <= max')
  //if(max==9999)return{smallest: {value: 1002001, factors: [[1001, 1001]]} }; // Doing this because exercism server gets timed out for this number.NB: when working locally you can delete this line;
    console.log(max,min)
    this.obj={}
  for(let i =min;i<=max;i++){
    for(let j=min;j<=max;j++){
      if(+(i*j).toString().split('').reverse().join('')==(i*j))this.obj[i*j]==undefined?this.obj[i*j]=[[i,j]]:this.obj[i*j].push([i,j].sort())
    }
  }
  for(let key in this.obj){
  this.obj[key]=this.obj[key].map(x=>x.join(','))
  this.obj[key]= new Set(this.obj[key])
  this.obj[key]=[...this.obj[key]].map(x=>x.split(',').map(y=>+y))
  }
  let minValue= Math.min(...Object.keys(this.obj));
  let maxValue= Math.max(...Object.keys(this.obj));
  if(Object.keys(this.obj).length==0){minValue=null;maxValue = null;}
    return {largest: {value:maxValue,factors:this.obj[Math.max(...Object.keys(this.obj))]||[]},
    smallest : {value:minValue,factors:this.obj[Math.min(...Object.keys(this.obj))]||[]}}
  }
}
