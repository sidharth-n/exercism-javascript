export  const flatten = (arr) => {
        arr = arr.join(',').replace(/[^0-9,-]/g,'').split(',').filter(x => x!='').map(x=>+x)
        return arr;
      };
