/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let finalList = new ListNode();
  if (list2.val === undefined && list1.val !== undefined) {
    return list1;
  } else if (list2.val !== undefined && list1.val === undefined) {
    return list2;
  } else if (list2.val === undefined && list1.val === undefined) {
    return finalList;
  }

  let current1 = list1;
  let current2 = list2;

  while (list1.val !== undefined && list2.val !== undefined) {
    if (current1.val <= current2.val) {
      if (finalList.val === undefined) {
        finalList.val = current1.val;
        current1 = current2.next;
      } else {
        finalList.next = current2.val;
        current2 = current2.next;
      }
    } else {
      if (finalList.val === undefined) {
        finalList.val = current2.val;
        current2 = current2.next;
      } else {
        finalList.next = current2.val;
        current2 = current2.next;
      }
    }
  }
  return finalList;
};
