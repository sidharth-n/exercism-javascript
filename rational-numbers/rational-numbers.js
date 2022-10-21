//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
  gcd(number1,number2){
    let hcf;
    number1 = Math.abs(number1); number2 = Math.abs(number2);
    for (let i = 1; i <= number1 && i <= number2; i++) {
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;}
  }
    return hcf;
  }

  add(x) {
    return new Rational((this.a * x.b + x.a * this.b),!(this.a * x.b + x.a * this.b)?1:(this.b * x.b));
  }

  sub(x) {
    return new Rational((this.a * x.b - x.a * this.b),!(this.a * x.b - x.a * this.b)?1:(this.b * x.b));
  }
  mul(x) {
    let c = (this.a*x.a); let d =(this.b*x.b);
    let g = this.gcd(c,d)??1;c=c/g;d=d/g;
    return new Rational(c,!c?1:d);
  }

  div(x) {
    let c = (this.a*x.b); let d =(this.b*x.a);
    let g = this.gcd(c,d)??1;c=c/g;d=d/g;
    if(c<0&&d<0){c=-c;d=-d}else if(d<0){c=-c;d=-d};
    return new Rational(c,!c?1:d);
  }

  abs() {
    return new Rational(Math.abs(this.a),Math.abs(this.b))
  }

  exprational(x) {
  let c = this.a**x; let d = this.b**x;
  let g = this.gcd(c,d)??1;c=c/g;d=d/g;
    return new Rational(c,!c?1:d);
  }

  expreal(x) {
    if(this.a==0)return 1.0;
    return this.a<0?(Math.pow(x**this.a,1/this.b)):Math.ceil((Math.pow(x**this.a,1/this.b)))
  }

  reduce() {
    let g = this.gcd(this.a,this.b)??1
    if(this.b<0){this.a=-this.a;this.b=-this.b}
    return new Rational(this.a/g,this.a==0?1:this.b/g)
  }
}
