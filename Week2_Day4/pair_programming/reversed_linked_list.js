// Navigator: May
// Driver: Benjamin

// Input: head of list
// Output: head of reversed list
// Have two pointers, curr -> first node
//                    prev -> null
// While traversing the list, end loop when curr === undefined
//     Declare another variable next, set to curr.next
//     curr.next = prev.
//     prev = curr
//     curr = next
// return prev

// Time complexity: O(n)
// Space complexity: O(1)

function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Definition for singly-linked list.
function ListNode(val, next) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.next = next === undefined ? null : next;
  return node;
}

function buildNode(list) {
  let head = ListNode();
  let curr = head;
  for (const val of list) {
    let node = ListNode(val);
    curr.next = node;
    curr = curr.next;
  }
  return head.next;
}

function printNode(node) {
  let curr = node;
  let values = [];
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }
  return values.join(" -> ");
}

function test() {
  let test1 = buildNode([1, 2]);
  let reversed1 = reverse(test1);

  console.log(printNode(reversed1));
}

test();
