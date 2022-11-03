export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    this.size++;
    let node = new Node(val);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else this.head = this.tail = node;
  }

  pop() {
    this.size--;
    if (this.tail) {
      let last_element = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return last_element;
    }
  }

  shift() {
    this.size--;
    if (this.head) {
      let first_element = this.head.value;
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = this.tail = null;
      }
      return first_element;
    }
  }

  unshift(val) {
    this.size++;
    let node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else this.head = this.tail = node;
  }

  delete(val) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value == val) {
        this.size--;
        if (current.next && current.prev) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        if (current.next == null) {
          this.pop();
          this.size++;
        }
        if (current.prev == null) {
          this.shift();
          this.size++;
        }
        break;
      }
      current = current.next;
    }
  }

  count() {
    return this.size;
  }
}