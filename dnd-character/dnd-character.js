export const abilityModifier = (x) => {
  if(x>18)throw new Error('Ability scores can be at most 18')
  if(x<3)throw new Error('Ability scores must be at least 3')
  return Math.floor((x-10)/2)
};

export class Character {
  constructor(){
    let x = [Math.ceil(Math.random()*6),Math.ceil(Math.random()*6),Math.ceil(Math.random()*6),Math.ceil(Math.random()*6)];
    x.sort().shift();
    this.y= x.reduce((a,y) =>a+y,0);
    }
  static rollAbility() {
    return new Character().y;
  }

  get strength() {
    return this.y;
  }

  get dexterity() {
     return this.y;
  }

  get constitution() {
     return this.y;
  }

  get intelligence() {
     return this.y;
  }

  get wisdom() {
     return this.y;
  }

  get charisma() {
     return this.y;
  }

  get hitpoints() {
    return 10+abilityModifier(this.constitution);
  }
}
