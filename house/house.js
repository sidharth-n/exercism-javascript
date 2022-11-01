const obj = {
  1:['malt','ate'],
  2:['rat','killed'],
  3:['cat','worried'],
  4:['dog','tossed'],
  5:['cow with the crumpled horn','milked'],
  6:['maiden all forlorn','kissed'],
  7:['man all tattered and torn','married'],
  8:['priest all shaven and shorn','woke'],
  9:['rooster that crowed in the morn','kept'],
   10:['farmer sowing his corn','belonged to'],
   11:['horse and the hound and the horn',''],
}

export class House {
  static verse(x) {
    if(x==1)return ['This is the house that Jack built.'];
    let song = [`This is the ${obj[x-1][0]}`];
    for(let i=2;i<x;i++){
      song.push(`that ${obj[x-i][1]} the ${obj[x-i][0]}`)
    }
    song.push('that lay in the house that Jack built.');
    return song
  }

  static verses(start,end) {
    let song =[];
    for(let i=start;i<=end;i++){
      song = song.concat(House.verse(i),'')
    }
    song.pop();
    return song;
  }
}
