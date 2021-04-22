/*
    How would you design a stack which, in addition to push and pop, has a function min
    which returns the min element? Push, pop and min should all operate in O(1) time.
 */
class Node {
    constructor(value, min) {
        this.value = value ? value: 0;
        this.min = min;
        this.next = null;
    }
}

// Implement Push, Pop and getMin

class MinStack {

    constructor() {
        this.head = null;
        this.size = 0;
    }


    push(value) {
        if(this.head === null) {
            this.head = new Node(value, value);
        }else{
            let head = this.head;
            let newNode = new Node(value, Math.min(this.head.min, value));
            newNode.next = head;
            this.head = newNode;
        }
        this.size+=1;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Error, stack is empty");
            return;
        }
        console.log(this.head.value);
        this.head = this.head.next;
    }

    peek(){
        return this.head.value;
    }

    getMin() {
        return this.head.min;
    }

    isEmpty() {
        return this.size === 0;
    }

}

let newStack = new MinStack();

newStack.push(10);
newStack.push(14);
newStack.push(2);
newStack.push(5);
newStack.push(9);


console.log(newStack.getMin());

newStack.pop();
newStack.pop();
newStack.pop();

console.log(newStack.getMin());