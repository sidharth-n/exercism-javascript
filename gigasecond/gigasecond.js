//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  console.log(moment);
  let date = new Date(moment);
  date.setSeconds(date.getSeconds()+Math.pow(10,9));
  return date;
};
