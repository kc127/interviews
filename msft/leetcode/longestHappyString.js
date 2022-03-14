/*

Given three integers, a,b,c. Create a longest happy string with following constraints:
1. can't have aaa or bbb or ccc
2. can contain at most a, b and c occurrences of a, b and c


pseudocode
  create a maxHeap with char and freq
  while maxHeap is not empty
    let first as char with most freq
    if last two chars in res array is equal to first char
      check if you have secondMax
      if no return;
      if yes, add secondMax char to res
              decrement secondMax count
      if secondMax count is not 0
          add back to maxHeap
    else
      add first char to res
      decrement first count by 1
    add first back to maxHeap if first count is not 0

    return res
*/
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