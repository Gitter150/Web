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
    this.reverse = () => {
        if(this.size <= 1) return;
        let curr = this.head;
        while( curr ) {
            [curr.prev, curr.next] = [curr.next, curr.prev];
            curr = curr.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
    };
    
    this.sort = () => {
        this.mergeSort(this.head, this.tail);
    }
    this.mergeSort = (head, tail) => {
        curr = head;
        size = 0;
        while(curr) {
            size++;
            curr = curr.next;
        }
        if(size <= 1) return;
        leftHead = head;
        // to find middle node
        slow = fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        rightHead = slow;
        mergeSort(leftHead, rightHead.prev);
        mergeSort(rightHead, tail);
        merge(
            leftHead, rightHead, tail
        );
    };
}

function toLinkedList(arr) {
    let list = new List();
    arr.forEach((item) => list.push_back(item));
    return list;
}

