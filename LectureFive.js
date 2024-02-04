// queue follows principle of FIFO
//  First In First Out 

class Store {
    constructor(){
        this.items = []
    }

    // enqueue basically push the elment 
    enqueue(data)
    {
        this.items.push(data)
    }
    // removes data from start follow FIFO
    dequeue()
    {
        // shift function removes element  from  start
        return this.items.shift()
    }
    isEmpty()
    {
        if (this.items.length === 0) {
            return true
        }
        return false
    }
    // return the first value that is inserted
    peek()
    {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    // size 
    size()
    {
        return this.items.length
    }
    // print functuon return or print all the values 
    print()
    {
        console.log(this.items.toString())
    }
}

object = new Store()

object.enqueue(10)
object.enqueue(20)
object.enqueue(30)
object.dequeue();
object.dequeue();
console.log(object.peek());
console.log(object.size());
console.log(object.isEmpty());
object.print()
