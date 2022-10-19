export const convert = (num,from,to) => {
    switch (true) {
        case invalidBase(from):
            throw new Error('Wrong input base')
        case invalidBase(to):
            throw new Error('Wrong output base')
        case invalidInput(num, from):
            throw new Error('Input has wrong format')
    }
  let no=0;
   for(let i=num.length-1;i>-1;i--){
no+=num[i]*from**((num.length-1)-i);
    }
     const result = []
    do {
        result.push(no % to)
        no = Math.floor(no / to)
    }
    while (no > 0)
    return result.reverse()
  };
function invalidBase(n) {
    return !n || !Number.isInteger(n) || n < 2
}
function invalidInput(numbers, base) {
    return numbers.length === 0 || numbers.some(d => d < 0 || d >= base) ||
        (numbers.length > 1 && numbers[0] === 0)
}