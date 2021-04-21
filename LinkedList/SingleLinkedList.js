class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
        }else {
            let oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
        }
    }

    printValues() {
        let temp = this.head;
        let res = "";
        while(temp !== null) {
            res+= temp.value +"->";
            temp = temp.next;
        }
        console.log(res);
    }

    search(value) {
        let temp = this.head;
        while(temp!=null) {
            if(temp.value === value) {
                console.log("Value: ",value, " has been found");
                return true;
            }
            temp = temp.next;
        }
        console.log("Error: ",value, " does not exist");
        return false;
    }

    delete(value) {
        let temp = this.head;

        if(temp.value === value) {
            this.head = this.head.next;
            return;
        }

        while(temp.next != null) {
            if(temp.next.value === value) {
                temp.next = temp.next.next;
                break;
            }
            temp = temp.next;
        }
    }

}

let linkedList = new SingleLinkedList();

for(let i =5; i>=0; i--) {
    linkedList.add(i);
}

linkedList.printValues();

linkedList.search(-1);

linkedList.search(3);

linkedList.delete(0);
linkedList.delete(1);
linkedList.delete(2);
linkedList.printValues();

linkedList.delete(3);

linkedList.printValues();