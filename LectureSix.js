// QUEUE WITH POINTERS 

class Store 
{
    constructor()
    {
        this.items = {},
        // these are the pointers
        this.rear = 0,
        this.front = 0 
    }
    enqueue(data)
    {
        this.items[this.rear]=data
        this.rear++;
    }
    dequeue()
    {
        let items = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return items
    }
    isEmpty()
    {
        return this.rear - this.front ===0
    }
    peek()
    {
        return this.items[this.front]
    }
    size()
    {
        return this.rear-this.front
    }
    print()
    {
        console.log(this.items)
    }

}

const store = new Store

store.enqueue('arham');
console.log(store.isEmpty());
store.enqueue('saad');
store.enqueue('subhan');
store.dequeue();
console.log(store.peek());
console.log(store.size());


store.print();
