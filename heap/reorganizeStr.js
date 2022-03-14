/**
 * @param {string} s
 * @return {string}
 *
 * pseudocode
 *  create a charMap with char mapped to it's frequnce
 *  create maxHeap using charMap with elem and priority
 *  while maxHeap is not empty
 *      let first be dequeued max element in maxHeap
 *      add first elem in res
 *      decrement first priority by 1
 *      if prev priority is not 0 => add it back to maxHeap
 *      set first as prev
 *  return res if res.len === s.len
 *
 * /
 var reorganizeString = function(s) {
  let res = [];
  let charFreq = createCharFreq(s);
  let maxHeap = new MaxPriorityQueue();
  for (let char in charFreq) {
      maxHeap.enqueue(char, charFreq[char]);
  }
  let prev = null;
  while (maxHeap.size() > 0) {
      let first = maxHeap.dequeue();
      res.push(first.element);
      first.priority--;
      if (prev && prev.priority > 0) {
          maxHeap.enqueue(prev.element, prev.priority);
      }
      prev = first;
  }
  return res.length !== s.length ? "" : res.join('');
};

var createCharFreq = (s) => {
  let charFreq = {};
  for(let i = 0; i < s.length; i++) {
      charFreq[s[i]] = (charFreq[s[i]] || 0) + 1;
  }
  return charFreq;
}