class HeapItem {
  constructor(val = 0, freq = 0) {
    this.val = val;
    this.freq = freq;
  }
}

class MaxHeap {
  constructor(){
    this.heap = [];
  }

  /* insert */
  enqueue(val, freq) {
    let node = new HeapItem(val, freq);
    this.heap.push(node);
    this.bubbleUp();
  }

  /* remove and return */
  dequeue() {
    let maxItem = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length) {
       this.heap[0] = end;
       this.bubbleDown();
    }
    return maxItem.val;
  }

  bubbleUp(i = this.heap.length - 1) {
     if (i <= 0) {
        return;
     }

     let parentIdx = Math.floor((i-1)/2);
     let child = this.heap[i];
     let parent = this.heap[parentIdx];
     if (child.freq > parent.freq) {
        [this.heap[i], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[i]];
        this.bubbleUp(parentIdx);
     }
  }

  bubbleDown(i = 0, swapIdx = null) {
    let leftIdx = (2*i) + 1;
    let rightIdx = (2*i)+ 2;
    let n = this.heap.length;

    if (leftIdx < n) {
      if (this.heap[leftIdx].freq >= this.heap[i].freq){
        swapIdx = leftIdx
      }
    }
    if (rightIdx < n) {
      if ((swapIdx === null && this.heap[rightIdx].freq >= this.heap[i].freq) || (swapIdx !== null && this.heap[rightIdx].freq >= this.heap[leftIdx].freq)) {
        swapIdx = rightIdx;
      }
    }

    if (swapIdx !== null) {
      [this.heap[i], this.heap[swapIdx]]  = [this.heap[swapIdx], this.heap[i]]
      this.bubbleDown(swapIdx, null);
    }
   }
}