/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
 var longestDiverseString = function(a, b, c) {
  let res = [];
  let maxHeap = new MaxPriorityQueue();
  if (a) maxHeap.enqueue('a',a);
  if (b) maxHeap.enqueue('b',b);
  if (c) maxHeap.enqueue('c',c);

  while (maxHeap.size() > 0) {
      let first = maxHeap.dequeue();

      if (res.length >= 2 && res[res.length - 1] === first.element && res[res.length -2] === first.element) {
          if (maxHeap.size() === 0) {
              return res.join('');
          }
          let second = maxHeap.dequeue();
          res.push(second.element);
          second.priority -= 1;
          if (second.priority !== 0) {
              maxHeap.enqueue(second.element, second.priority);
          }
      } else {
          res.push(first.element);
          first.priority -= 1;
      }
      if (first.priority > 0) {
          maxHeap.enqueue(first.element, first.priority);
      }
  }

  return res.join('');
};