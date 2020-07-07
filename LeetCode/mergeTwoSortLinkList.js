Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

class ListNode {
    constructor (val = null, next = null){
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy;

    while (l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            dummy.next = l1;
            l1 = l1.next;

        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if(l1 !== null){
        dummy.next = l1;
    }   else {
        dummy.next = l2;
    }
    return head.next
};
