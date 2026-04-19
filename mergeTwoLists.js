function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function makeList(values) {
  if (values.length <= 0) {
    return null;
  }

  const head = new ListNode();
  let current = head;

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const isLast = i === values.length - 1;

    current.val = value;

    if (!isLast) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  return head;
}

/**
 * @param {ListNode} list
 */
function readList(list) {
  let head = list;

  while (head) {
    head = head.next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  let list = null;
  let current = list;
  let head1 = list1;
  let head2 = list2;

  const appendToList = (value) => {
    if (!list) {
      list = new ListNode(value);
      current = list;
    } else {
      current.next = new ListNode(value);
      current = current.next;
    }
  };

  while (head1 !== null || head2 !== null) {
    const value1 = head1?.val ?? Number.MAX_SAFE_INTEGER;
    const value2 = head2?.val ?? Number.MAX_SAFE_INTEGER;

    let value = null;
    let listToMove = -1;

    if (value1 <= value2) {
      value = value1;
      listToMove = 1;
    } else {
      value = value2;
      listToMove = 2;
    }

    if (value !== undefined && value !== null) {
      appendToList(value);
    }

    if (head1 && listToMove === 1) {
      head1 = head1.next;
    }

    if (head2 && listToMove === 2) {
      head2 = head2.next;
    }
  }

  return list;
};

console.log(
  JSON.stringify(mergeTwoLists(makeList([-9, 3]), makeList([5, 7])), null, 2),
);
