let arr = [1,4,2,5,7,4,1];

let list = toLinkedList(arr);

list.print();

function List() {
    this.Node = function(num) {
        this.data = num;
        this.next = null;
        this.prev = null;
    }
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.push_back = (num) => {
        if(this.size == 0) {
            this.tail = new this.Node(num);
            this.head = this.tail;
            this.size++;
            return; 
        }
        this.tail.next = new this.Node(num); // remmeber, this.tail.next is the new node!
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
        this.size += 1;
    };
    this.print = () => {
        let curr = this.head;
        while (curr) {
            process.stdout.write(curr.data + (curr.next ? " <-> " : "\n"));
            curr = curr.next;
        }
    }
}

function toLinkedList(arr) {
    let list = new List();
    arr.forEach((item) => list.push_back(item));
    return list;
}

