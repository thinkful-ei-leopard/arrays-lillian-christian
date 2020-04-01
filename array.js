'use strict';
const memory = require('./memory');
const memoryInstance = new memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memoryInstance.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity){ 
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memoryInstance.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memoryInstance.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memoryInstance.get(this.prt + this.length - 1);
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

    memoryInstance.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memoryInstance.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    
    memoryInstance.copy(this.ptr + index, this.ptr + index +1, this.length - index - 1);
    this.length--;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memoryInstance.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memoryInstance.copy(this.ptr, oldPtr, this.length);
    memoryInstance.free(oldPtr);
    this._capacity = size;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array
//
function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push("tauhida")
  console.log(arr.get(0));
}
main();