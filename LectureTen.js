// LINKLIST
/*
In computer science, a linked list is a linear collection of data elements
whose order is not given by their physical placement in memory. Instead, each
element points to the next. It is a data structure consisting of a collection of 
nodes which together represent a sequence.
*/

class Node
{
    constructor(val)
    {
        this.value = val
        this.next=null
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null,
        this.size=0
    }

    isEmpty()
    {
        return this.size === 0
    }
    getSize()
    {
        return this.size
    }
    prepend(val)
    {
        const node = new Node(val)
        if (this.isEmpty()) {
            this.head=node
        }
    }
}

const list = new LinkedList()
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());

list.prepend(10)
list.prepend(20)
list.prepend(30)