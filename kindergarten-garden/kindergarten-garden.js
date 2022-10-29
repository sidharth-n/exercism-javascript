const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram.split('\n').map((x)=>x.split(''));
    this.students = students.sort();
    this.obj = {}
       for(let stu of this.students){
      this.obj[stu]=this.get_plants()
    }
}

  get_plants(){
    let ar=[];
    ar.push(PLANT_CODES[this.diagram[0][0]],PLANT_CODES[this.diagram[0][1]],PLANT_CODES[this.diagram[1][0]],PLANT_CODES[this.diagram[1][1]])
    this.diagram[0]=this.diagram[0].slice(2);
    this.diagram[1]=this.diagram[1].slice(2);
    return ar;
  }

  plants(student) {
    return this.obj[student];
  }
}
