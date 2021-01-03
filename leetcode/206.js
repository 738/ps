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
var reverseList = function(head) {
    if (!head) return head;
    let cur = head;
    let newHead = new ListNode(cur.val);
    while (cur.next) {
        newHead = new ListNode(cur.next.val, newHead)
        cur = cur.next;
    }
    return newHead;
};
