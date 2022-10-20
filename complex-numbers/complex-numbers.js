export class ComplexNumber {
  constructor(a,b) {
    this.a =a;
    this.b=b;
  }

  get real() {
   return this.a;
  }

  get imag() {
    return this.b;
  }

  add(num) {
    return new ComplexNumber(this.a+num.a,this.b+num.b);
  }

  sub(num) {
    return new ComplexNumber(this.a-num.a,this.b-num.b);
  }

  div(num) {
    return new ComplexNumber(((this.a * num.a + this.b * num.b)/(num.a**2 + num.b**2)),((this.b * num.a - this.a * num.b)/(num.a**2 + num.b**2)));
  }

  mul(num) {
    return new ComplexNumber((this.a * num.a - this.b * num.b),(this.b * num.a + this.a * num.b));
  }

  get abs() {
    return Math.sqrt((this.a**2+this.b**2));
  }

  get conj() {
    return new ComplexNumber(this.a,-this.b||0);
  }

  get exp() {
    return new ComplexNumber(Math.E**this.a*Math.cos(this.b),Math.E**this.a*Math.sin(this.b));
  }
}
