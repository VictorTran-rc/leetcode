Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL


Constraints:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
The length of the linked list is between [0, 10^4].

1) Be able to seperate the even and odd numbers to their own list
2) Link the odd list to the even list
3) have two variables one for oddHead second for evenHead linkList
4) Have two more pointer (odd, even) variables so you can move throughout the list so you can link them together
5) I want to reassign the pointers throughout the loop odd numbers loop together and even numbers loop together
6) Make sure the function is a linked list. Set the parameter equal to null
7) If return null then its not a linked list
8) Set variables to seperate the odd and even numbers

var oddEvenList = function(head) {
    if (head === null) {
        return null;
    } // return null then there is no linked list

  // variables that allow you to form the even and odd linked list
    let odd = head; // starting the list for odd
    let even = head.next; // Move to the next number after even
    let evenHead = even; // starting point for the even numbers


    while (even !== null && even.next !== null) { // stops the loop when a number equals to null
        odd.next = even.next; // moving to the next odd number
        odd = odd.next; // moving the odd pointer to the next odd number
        even.next = odd.next; // moving to the next even number
        even = even.next; // moving the even pointer to the next even number
    }

    odd.next = evenHead; // Connecting the odd link list to the even link list
    return head;
};
