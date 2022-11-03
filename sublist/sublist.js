
export class List {
  constructor(list1) {
    this.list1 = list1 || [];
  }

  compare(list2 = []) {
    let list1_string = this.list1.join(".");
    let list2_string = list2.list1.join(".");
    if (!list1_string && !list2_string) return "EQUAL";
    if (list1_string.indexOf(list2_string) !== -1) {
      if (
        list1_string.indexOf(list2_string[0]) == 0 &&
        list1_string.indexOf(list2_string[list2_string.length - 1]) ==
          list1_string.length - 1
      )
        return "EQUAL";
      else return "SUPERLIST";
    } else if (list2_string.indexOf(list1_string) !== -1) {
      return "SUBLIST";
    } else return "UNEQUAL";
  }
}