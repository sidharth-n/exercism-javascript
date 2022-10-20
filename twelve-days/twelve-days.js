export const recite = (start,last=start) => {
  let final=[];
  function generate_lyrics(n){
  const additions = ['two Turtle Doves, ','three French Hens, ','four Calling Birds, ','five Gold Rings, ','six Geese-a-Laying, ','seven Swans-a-Swimming, ','eight Maids-a-Milking, ','nine Ladies Dancing, ','ten Lords-a-Leaping, ','eleven Pipers Piping, ','twelve Drummers Drumming, ']
  const no = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth']
  const lyrics = ['On the ',' day of Christmas my true love gave to me: ','and ','a Partridge in a Pear Tree.\n']
   
  for(let i=0;i<n-1;i++){
    lyrics.splice(2,0,additions[i])
  }
  lyrics.splice(1,0,no[n-1]);
     if(n==1)lyrics.splice(3,1);
  return lyrics.join('');
   }
  for(let l=start;l<=last;l++){
    final.push(generate_lyrics(l),'\n');
  }
  final.pop();
  return final.join('');;
};
