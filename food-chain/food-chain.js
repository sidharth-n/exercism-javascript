const creatures = {
  1:['fly','\n'],
  2:['spider' , 'It wriggled and jiggled and tickled inside her.\n'],
  3:['bird' , 'How absurd to swallow a bird!\n'],
  4:['cat' , 'Imagine that, to swallow a cat!\n'],
  5:['dog' , 'What a hog, to swallow a dog!\n'],
  6:['goat' , 'Just opened her throat and swallowed a goat!\n'],
  7:['cow', "I don't know how she swallowed a cow!\n"],
}
export class Song {
  constructor(){
    this.base = `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`
  }
  verse(x) {
  if(x==1)return this.base;
    if(x==8)return `I know an old lady who swallowed a horse.
She's dead, of course!\n`;
    let ver = `I know an old lady who swallowed a ${creatures[x][0]}.
${creatures[x][1]}`;
    for(let i=1;i<x;i++){
      ver+= `She swallowed the ${creatures[x-(i-1)][0]} to catch the ${creatures[x-i][0]=='spider'?`spider that wriggled and jiggled and tickled inside her`:creatures[x-i][0]}.\n`
    }
    ver+=`I don't know why she swallowed the fly. Perhaps she'll die.\n`
    return ver;
  }

  verses(start,end) {
    let song ='';
    for(let i=start;i<=end;i++){
      song+=this.verse(i)+'\n';
    }
    return song;
  }
}
