export class Cipher {
  constructor(key) {
  this.key = key || 'aaaaaaaaaa';
  }

  substitute(a,b,type){
    a = a.charCodeAt(0)-97;b = b.charCodeAt(0)-97;
   if(type=='en'){let z=a+b;if(z>=26)z-=26;return String.fromCharCode(97+z);}
    let z = a-b;if(z<0)z=26-(b-a);
    return String.fromCharCode(97+z);
   }

  encode(input) {
    this.key=this.key.padEnd(input.length,this.key);
    input=input.split('');
    for(let i=0;i<input.length;i++){
      input[i]=this.substitute(input[i],this.key[i],'en');
    }
    return input.join('');
  }

  decode(input) {
    this.key=this.key.padEnd(input.length,this.key);
    input=input.split('');
    for(let i=0;i<input.length;i++){
      input[i]=this.substitute(input[i],this.key[i],'de');
    }
    return input.join('');
  }

}