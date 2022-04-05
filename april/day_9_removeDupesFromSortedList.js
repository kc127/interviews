/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let newHead = new ListNode(0,head);
  let prev = newHead;
  let curr = head;
  while (curr) {
      if (curr.next && curr.val === curr.next.val) {
          while (curr.next && curr.val === curr.next.val) {
              curr = curr.next
          }
          prev.next = curr.next;
      } else {
          prev = prev.next;
      }
      curr = curr.next;
  }
  return newHead.next;
};