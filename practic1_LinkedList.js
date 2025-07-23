class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    size() {
        return this.length;
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    join(otherList) {
        let current = otherList.head;
        while (current) {
            this.append(current.data);
            current = current.next;
        }
        return this;
    }

    map(fn) {
        const result = new LinkedList();
        let current = this.head;
        while (current) {
            result.append(fn(current.data));
            current = current.next;
        }
        return result;
    }

    filter(fn) {
        const result = new LinkedList();
        let current = this.head;
        while (current) {
            if (fn(current.data)) {
                result.append(current.data);
            }
            current = current.next;
        }
        return result;
    }
}