/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curNode1 = l1;
    let curNode2 = l2;
    let flag = false;
    let resultNode = null;
    let prevNode = null;
    let sum = -1;
    while (curNode1 || curNode2) {
        sum = (curNode1 ? curNode1.val : 0) + (curNode2 ? curNode2.val : 0);
        
        if (flag) sum += 1;
        if (sum >= 10) {
            flag = true;
            sum -= 10;
        } else flag = false;
        // 제일 처음 prevNode, resultNode 정의
        if (!resultNode) prevNode = resultNode = new ListNode(sum, null);
        else {
            prevNode.next = new ListNode(sum, null);
            prevNode = prevNode.next;
        }
        
        if (curNode1) curNode1 = curNode1.next;
        if (curNode2) curNode2 = curNode2.next;
    }
    if (flag) {
        prevNode.next = new ListNode(1, null);
    }
    
    return resultNode;
};
