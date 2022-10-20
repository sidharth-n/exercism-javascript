export class Robot {
  constructor(){
  this.used = new Set();
  this.new= this.new_name();
    }
  
  new_name(){
  this.temp =     String.fromCharCode((Math.random()*26)+65)+String.fromCharCode((Math.random()*26)+65)+Math.floor(Math.random()*9.9) +Math.floor(Math.random()*9.9) +Math.floor(Math.random()*9.9);
  if(this.used.has(this.temp))this.new_name();
  this.used.add(this.temp);return this.temp;
}
  
  get name(){
    return this.new;
  }
  
  reset(){
this.new=this.new_name();
  }
}

Robot.releaseNames = () => {};
