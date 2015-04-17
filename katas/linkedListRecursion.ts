/// TypeScript Implemetation of processing a LinkedList data structure using recursion.

interface INodeItem {
    
}
class NodeItem {
    value: string;
    next: NodeItem;

    constructor(value: string, next: NodeItem);
    constructor(value: any);
    constructor(value: any, next?: NodeItem) {
        this.value = value;
        this.next = next;
    }
}

interface ILinkedLink {
    add(content: string): void;
    get(index: number): NodeItem;
    delete(index: number): void;
    list(): Array<NodeItem>;
}
class LinkedList {
    head: NodeItem;
    count: number;
    current: NodeItem;

    constructor() {
        this.count = 0;
        this.head = null;
    }

    // Add a node to the LinkedList
    add(content: string) {
        var node = new NodeItem(content);

        if (!this.head) {
            this.head = node;
        } else {
            this.current.next = node;
        }

        this.current = node;
        this.count++;
    }

    // Get a node at index in the LinkedList
    get(index: number) {
        var count = 0;
        var temp = this.head;
        var node = null;

        while (!node) {
            if (index === count) {
                node = temp;
                break;
            }
            count++;
            temp = temp.next;
        }

        return node;
    }

    // Delete a node at index from the LinkedList
    delete(index: number) {
        if (index === 0) {
            this.head = null;
            this.current = null;
        }

        if (index > 1 && index <= this.count) {
            var count = 0;
            var temp = this.head;
            var last = null;

            while (temp) {
                if (index === count) {
                    last.next = temp.next;
                }
                count++;

                last = temp;
                temp = temp.next;
            }
        }
    }

    /// List the nodes in the LinkedList
    list() {
        var temp = this.head;
        var output = new Array<NodeItem>();
        while (temp != null) {
            output.push(temp.next);
        }
    }
}

// Produce output
window.onload = () => {
    var list = new LinkedList();

    list.add("1");
    list.add("2");
    list.add("3");
    list.list();
    list.delete(2);
    list.list();
    list.get(0);
};