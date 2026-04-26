function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const buildList = (items) => {
  if (items.length <= 0) {
    return null;
  }

  let head = new ListNode();
  let current = head;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const lastIndex = items.length - 1;

    current.val = item;

    if (i !== lastIndex) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  return head;
};

const readList = (list) => {
  let head = list;
  const items = [];

  while (head) {
    items.push(head.val);
    head = head.next;
  }

  return items.reverse();
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  return buildList(readList(head));
};

console.log(reverseList(buildList([1, 2, 3, 4, 5])));
console.log(reverseList(buildList([1, 2])));
console.log(reverseList(buildList([])));
