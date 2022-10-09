//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series.split('');
    if (this.series == '')throw new Error('series cannot be empty');
  }
  slices(sliceLength) {
    let subArray = [];
    let mainArray =[];
    if (sliceLength==0)throw new Error('slice length cannot be zero');
    if (sliceLength<0)throw new Error('slice length cannot be negative');
   if (sliceLength > (this.series).length) throw new Error('slice length cannot be greater than series length');
    for (let i=0;i<((this.series.length-sliceLength)+1);i++){
      for(let j=i;j<(i+sliceLength);j++){
        subArray.push(+this.series[j]);
      }
      console.log(subArray);
        mainArray.push(subArray);
        subArray =[];
    }
  return mainArray;
  }
}