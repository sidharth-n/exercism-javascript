export class Clock {
  constructor(h=0,m=0) {
    this.hrs =h;
    this.min =m;
  }

  toString() {
    this.hrs = (this.hrs + Math.floor(this.min/60))%24;this.hrs = this.hrs>=0?this.hrs:24+this.hrs;
    this.min = this.min%60;this.min = this.min>=0?this.min:60+this.min;
    return `${this.hrs.toString().padStart(2,'0')}:${this.min.toString().padStart(2,'0')}`
  }

  plus(m) {
    this.min+=m;
    return this;
  }

  minus(m) {
    this.min-=m;
    return this;
  }

  equals(clock) {
    return (this.toString()==clock.toString())
  }
}
