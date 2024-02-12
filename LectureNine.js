// CIRCULAR QUEUE

class CircularQueue
{
    // when object create we pass capacity of our list
    constructor(capacity)
    {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1
        this.front=-1
    }
    // this function check wheather our list is full or not
    isFull()
    {
        return this.currentLength===this.capacity
    }
    // this function check our list is empty or not
    isEmpty()
    {
        return this.currentLength===0
    }
    // enqueue function insert element  in array
    enqueue(element)
    {
        if (!this.isFull()) {
            this.rear =  (this.rear+1) % this.capacity;
            this.items[this.rear] = element
            this.currentLength++;
            if (this.front===-1) {
                this.front=this.rear
            }
        }
    }
    dequeue()
    {
        if (this.isEmpty()) {
            return null
        }

        const item = this.items[this.front];
        this.items[this.front]=null
        this.front =(this.front+1) % this.capacity
        this.currentLength--;

        if (this.isEmpty()) {
            this.front=-1;
            this.rear=-1;
        }
        return item
    }
    peek()
    {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null
    }
    print()
    {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        }else
        {
            let i
            let str =''
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity)
            {
                str+=this.items[i] + " "
            }
            str+=this.items[i]
            console.log(str)

        }
    }
}

const queue = new CircularQueue(4)

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
// queue.enqueue(30)
queue.enqueue(40)

console.log(queue.isFull());
queue.print()

console.log(queue.peek())

queue.dequeue()
queue.enqueue(50)
queue.print()