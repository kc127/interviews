/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
 var strWithout3a3b = function(a, b) {
  let res = [];
  let maxHeap = new MaxPriorityQueue();
  maxHeap.enqueue('a',a);
  maxHeap.enqueue('b',b);

  while (!maxHeap.isEmpty()) {
      let curr = maxHeap.dequeue();
      if (res.length >= 2 && res[res.length - 1] === curr.element && res[res.length - 2] === curr.element) {
          if (maxHeap.isEmpty()) {
              return res.join("");
          }
          let second = maxHeap.dequeue();
          res.push(second.element);
          second.priority--;
          if (second.priority > 0) {
              maxHeap.enqueue(second.element, second.priority);
          }
      } else {
          res.push(curr.element);
          curr.priority--;
      }
      if (curr.priority !== 0) {
          maxHeap.enqueue(curr.element, curr.priority);
      }
  }

  return res.join("")
};