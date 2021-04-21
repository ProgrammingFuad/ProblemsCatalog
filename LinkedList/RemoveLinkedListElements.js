

function ListNode(val, next) {
    this.val = (val ===undefined ? 0: val);
    this.next = (next === undefined ? null : next);
}

var removeElements = function(head, val) {
    if(!head) {
        return null;
    }

    let dummyNode = new ListNode(0, head);
    let slowPointer = head;
    let fastPointer = head.next;

    while(fastPointer) {
        if(fastPointer.val === val) {
            fastPointer = fastPointer.next;
        }else {
            slowPointer.next = fastPointer;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }
    }

    slowPointer.next = fastPointer;
    return dummyNode.next;
}