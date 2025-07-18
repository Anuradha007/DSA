class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
        this.prev = null; 
    }
}

class DoublyLinkedList {

    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
       const newNode = new Node(value);

       if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
       }

       this.tail.next = newNode;
       newNode.prev = this.tail;
       this.tail = newNode;
       this.length++;
       return this;
    }

    pop() {

        if(this.length === 0) {
            return undefined
        }

        let temp = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;

        return temp;
    }

    unshift(value) {
        
        let newNode = new Node(value);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    shift() {
        if(this.length === 0) {
            return undefined;
        }

        let temp = this.head;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.unshift(1);
myDoublyLinkedList.unshift(0);
myDoublyLinkedList.shift();
myDoublyLinkedList.pop()
console.log(myDoublyLinkedList);
