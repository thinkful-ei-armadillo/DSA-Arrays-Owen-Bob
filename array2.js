'use strict';
const mem = require('./memory');
const memory = new mem();
//problem 1
class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this._capacity = 0;
  }

  push(value) {
    if (this._capacity <= this.length) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    let oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of Memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
Array.SIZE_RATIO = 3;
module.exports = Array;

function main() {

  Array.SIZE_RATIO = 3;

  let arr = new Array();

  // Problem 2
  //arr.push(3);
  //length 1 cap 3 ma 0
  //arr.push(5);
  //l 2 cap 3 ma 0
  //arr.push(15);
  //l 3 cap 3 ma 0
  //arr.push(19);
  //l 4 cap 12 ma 3
  //arr.push(45);
  //l 5 cap 12 ma 3
  //arr.push(10);
  //l 6 cap 12 ma 3

  //Problem 3
  // arr.pop();
  // arr.pop();
  // arr.pop();

  //Problem 4
  // arr.get(0);
  //arr.push('tauhida');
  //console.log(arr.get(0));
  //The purpose of _resize() is to increase capacity and moving ptr to the beginning of new capacity


}

main();
