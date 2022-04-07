/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  let fakeHead = new ListNode();
  let curr = fakeHead;
  let minHeap = new FakeHeap(minComparator);

  lists.forEach(n => n && minHeap.add(n));
  while (minHeap.size()) {
      let node = minHeap.pop();
      curr.next = node;
      if (node.next) {
          minHeap.add(node.next);
      }
      curr = curr.next;
  }
  return fakeHead.next;
};

function minComparator(a,b) {
  return a.val < b.val ? -1 : 1;
}

class FakeHeap {
  constructor(comparator) {
      this.vals = [];
      this.comparator = comparator;
  }

  size() {
      return this.vals.length;
  }

  add(val) {
      this.vals.push(val);
  }

  peek() {
      this.heapify();
      return this.vals[0];
  }

  pop() {
      this.heapify();
      return this.vals.shift();
  }

  heapify() {
      return this.vals.sort(this.comparator);
  }
}
