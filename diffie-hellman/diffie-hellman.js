export class DiffieHellman {
  constructor(p, g) {
   this.p =p;
    this.g =g;
    if(this.p<1) throw new Error();
    for (let i=2;i<this.p;i++) if(this.p%i==0)throw new Error ();
    for (let i=2;i<this.q;i++) if(this.q%i==0)throw new Error ();
  }

  getPublicKey(privateKey) {
    if(privateKey <1 || privateKey >this.p || privateKey ==1 || privateKey == this.p) throw new Error();
    return this.g**privateKey%this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey**myPrivateKey%this.p
  }
}
