export const score = (arr,cat) => {
    switch(cat){
        case 'yacht' : {
           if(new Set(arr).size ==1) return 50; else return 0;
            }
                 case 'ones' : {
                return arr.reduce((ar,cur)=> {if(cur==1){ar+=cur}return ar},0)
                 }

                 case 'twos' : {
                    return arr.reduce((ar,cur)=> {if(cur==2){ar+=cur}return ar},0)
                } 

                case 'threes' : {
                    return arr.reduce((ar,cur)=> {if(cur==3){ar+=cur}return ar},0)
                } 

                case 'fours' : {
                    return arr.reduce((ar,cur)=> {if(cur==4){ar+=cur}return ar},0)
                } 

                case 'fives' : {
                    return arr.reduce((ar,cur)=> {if(cur==5){ar+=cur}return ar},0)                
                } 

                case 'sixes' : {
                    return arr.reduce((ar,cur)=> {if(cur==6){ar+=cur}return ar},0)
                 } 
                 case 'choice' : {
                    return arr.reduce((ar,cur)=>ar+cur,0)
                }
                 case 'little straight' : {
                    if(arr.join('').replace(/[1-5]/g,'x')=='xxxxx' && new Set(arr).size == 5) return 30; else return 0;
                }
                case 'big straight' : {
                    if(arr.join('').replace(/[2-6]/g,'x')=='xxxxx' && new Set(arr).size == 5) return 30; else return 0;
                }
                case 'full house' : {
                    if(arr.filter(val => val ==arr[4]).length == 2 || arr.filter(val => val ==arr[4]).length == 3 ) return arr.reduce((ar,cur)=>ar+cur,0);else return 0;
                }
          case 'four of a kind' :{
                    const counts = {};
                    let sum =0;
                      arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
                      for(let [key,val] of Object.entries(counts)){
                        if (val>=4)sum+=key*4;
                      }
                      return sum;}}};
