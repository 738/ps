/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let binStr='';
    let curNode=head;
    while (curNode !== null) {
        binStr += curNode.val;
        curNode = curNode.next;
    }
    return parseInt(binStr, 2);
};
