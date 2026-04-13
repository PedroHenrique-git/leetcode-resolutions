function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {numbers} number[]
 * @returns ListNode
 */
const buildList = (numbers) => {
  const list = new ListNode();
  let current = list;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    current.val = num;
    current.next = new ListNode();
    current = current.next;
  }

  return list;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let carry = 0;

  let list = null;
  let current = list;

  while (head1 !== null || head2 !== null || carry !== 0) {
    const sum = (head1?.val ?? 0) + (head2?.val ?? 0) + carry;

    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    if (!list) {
      list = new ListNode(digit);
      current = list;
    } else {
      current.next = new ListNode(digit);
      current = current.next;
    }

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  return list;
};

console.log(
  JSON.stringify({
    //a: buildList([5, 6, 4, 9]),
    //first: addTwoNumbers(buildList([2, 4, 9], buildList([5, 6, 4, 9]))),
    //first: addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4])),
    //second: addTwoNumbers(buildList([0]), buildList([0])),
    third: addTwoNumbers(
      buildList([9, 9, 9, 9, 9, 9, 9]),
      buildList([9, 9, 9, 9]),
    ),
  }),
);
