//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1,dna2) => {
  if (dna1.length !== dna2.length)
    throw new Error('strands must be of equal length');
    let count =0;
    let dna1Array  = dna1.split('');
    for (let i=0;i<dna1Array.length;i++){
        if (dna1Array[i] !== dna2[i])
        count++;
    }
    return count;
  };