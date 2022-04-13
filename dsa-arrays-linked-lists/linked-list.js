/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
    }
    this.newNode = this.head;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(this.length === 0){
      throw new Error('Nothing to return')
    }
    return this.get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(!idx){
      throw new Error('No valid index')
    }
    let currentVal = this.get(idx);
    currentVal.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.get(idx);
    while(currentNode){
      let newNode = new Node(val);
      newNode.next = (currentNode - 1);
      (currentNode - 1) = newNode;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
