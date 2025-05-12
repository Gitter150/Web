
function Node(data) {
    
    this.data = data;
    this.next = null;
    this.prev = null;
}

function List() {

    this.head = null;
    this.tail = null;

    this.push_front = function(data) {

        let newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        this.head.prev = newNode;  // yeah this.head.prev is the new node
        newNode.next = this.head;
        this.head = newNode;
    }

    this.push_back = function(data) {

        let newNode = new Node(data);

        if(this.tail == null) {
            this.tail = newNode;
            this.head = this.tail;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    this.print = function() {

        if(this.head == null) {
            return;
        }

        let currNode = this.head;

        while(currNode != this.tail) {
            process.stdout.write(currNode.data+" -> ");
            currNode = currNode.next;
        }

        process.stdout.write(currNode.data+"\n");
    }
}

let lst = new List();
lst.push_back(3);
lst.push_back(4);
lst.push_back(5);
lst.print();
lst.push_front(2);
lst.push_front(1);
lst.print();
