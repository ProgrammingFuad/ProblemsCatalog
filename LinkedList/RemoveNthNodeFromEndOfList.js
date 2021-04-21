
let removeNthFromEnd = function(head, n) {

    if(head.next === null) {
        return null;
    }

    let fastRunner = head;
    let tempN = n;

    while(tempN > 1 && fastRunner) {
        fastRunner = fastRunner.next;
        tempN--;
    }

    let slowRunner = head;
    let prevRunner = null;

    while(fastRunner.next !== null) {
        prevRunner = slowRunner;
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next;
    }

    if(prevRunner != null) {
        prevRunner.next = slowRunner.next;
    }else {
        head = head.next;
    }

    return head;
}