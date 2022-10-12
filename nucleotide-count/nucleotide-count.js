

export function countNucleotides(strand) {
  let temp = strand + 'ACGT';
if(/[^ACGT]/g.test(strand)) throw new Error('Invalid nucleotide in strand');
 return `${strand.match(/A/g)? strand.match(/A/g).length : '0'} ${strand.match(/C/g)? strand.match(/C/g).length : '0'} ${strand.match(/G/g)? strand.match(/G/g).length : '0'} ${strand.match(/T/g)? strand.match(/T/g).length : '0'}`;
}