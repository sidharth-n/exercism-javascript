export const translate = (seq='') => {
 const condons={
   'Methionine': ['AUG'],
      'Phenylalanine': ['UUU', 'UUC'],
      'Leucine': ['UUA', 'UUG'],
      'Serine' :['UCU', 'UCC', 'UCA', 'UCG'],
      'Tyrosine': ['UAU', 'UAC'],
      'Cysteine' :['UGU', 'UGC'],
      'Tryptophan' :['UGG'],
 }
  function search(x){
    for(let key in condons){
      if(condons[key].includes(x))
        return key;
    }
    throw new Error('Invalid codon')
  }
  let stop = ['UAA', 'UAG', 'UGA'];
  let ar = seq.split('');let final = [];
while(ar.length!=0){
if(!stop.includes(ar.slice(0,3).join(''))){
  final.push(search(ar.slice(0,3).join('')));
  ar=ar.slice(3);
}
  else break;  
}
 return final; 
};