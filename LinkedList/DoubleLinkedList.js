class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value) {
        let newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    printValuesFromTail() {
        console.log('Printing Values from Tail');
        let temp = this.tail;
        let res = "";
        while(temp !== this.head) {
            res+= temp.value +"->";
            temp = temp.prev;
        }
        res+= this.head.value;
        console.log(res, "\n");
    }

    printValuesFromHead() {
        console.log('Printing Values from Head');
        let temp = this.head;
        let res = "";
        while(temp !== this.tail) {
            res+= temp.value +"->";
            temp = temp.next;
        }
        res+= this.tail.value;
        console.log(res);
    }

    delete(value) {
        let tempNode = this.head;
        console.log("Deleting: ", value);
        if(this.head.value === value) {
             this.head = this.head.next;
             this.head.prev = this.tail;
             return ;
        }

        if(this.tail.value === value) {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            return ;
        }

        while(tempNode.value !== value){
            tempNode = tempNode.next;
        }

        let node = tempNode.prev;
        node.next = tempNode.next;
        tempNode.next.prev = node;
    }

    search(value){
        let tempNode = this.head;
        if(this.head.value === value) {
            return true;
        }
        tempNode = tempNode.next;
        while(tempNode !== this.head){
            if(tempNode.value === value) {
                return true;
            }
            tempNode = tempNode.next;
        }
        return false;
    }
}

let doubleLinkedList = new DoubleLinkedList();

for(let i =5; i>= 0; i--){
    doubleLinkedList.add(i);
}

doubleLinkedList.printValuesFromHead();

doubleLinkedList.printValuesFromTail();


doubleLinkedList.delete(0);
console.log('\n');
doubleLinkedList.printValuesFromHead();


doubleLinkedList.delete(3);
doubleLinkedList.printValuesFromHead();
doubleLinkedList.printValuesFromTail();

console.log(doubleLinkedList.search(-1));