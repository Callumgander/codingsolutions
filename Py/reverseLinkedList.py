# Reverse linked list, leetcode
# https://leetcode.com/problems/reverse-linked-list/submissions/

# relatively fast, not particularly space efficient

# you make a prev property equal to None, then, while the head is not none, you make the head's next be replaced by
# null, the prev property be replaced by head and the head replaced by the head's initial next. You loop this until the head reaches the end of the linked list and the
# linked list will be reversed


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        ListNode.prev = None

        while (head != None):
            ListNode.next = head.next
            head.next = ListNode.prev
            ListNode.prev = head
            head = ListNode.next

        return ListNode.prev
