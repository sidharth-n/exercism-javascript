export class GradeSchool {
  constructor(){
  this._obj ={}
  }
  roster() {
    for(let key in this._obj)this._obj[key].sort();
    return JSON.parse(JSON.stringify(this._obj))
  }
  
  add(name,grade) {
    if(grade in this._obj)this._obj[grade].push(name)
    else this._obj[grade]=[name];
  }

  grade(grad) {
    let x = 0;
    for(let key in this._obj)
        if(this._obj[key].includes(this._obj[grad].join('')))x++;
    if(x>1)return [];
    return JSON.parse(JSON.stringify(this._obj[grad]?.sort()??[]));
  }
}
