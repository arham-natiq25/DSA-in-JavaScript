// Stack follows the principle of LIFO
// Last In First Out

class Store {
    constructor(){
        this.items = []
    }

    // push the element onto the stack
    push(data)
    {
        this.items.push(data)
    }
    
    // removes data from the top, follow LIFO
    pop()
    {
        // pop function removes element from the top
        return this.items.pop()
    }

    isEmpty()
    {
        if (this.items.length === 0) {
            return true
        }
        return false
    }

    // return the top value that is inserted
    peek()
    {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1]
        }
        return null
    }

    // size 
    size()
    {
        return this.items.length
    }

    // print function returns or prints all the values 
    print()
    {
        console.log(this.items.toString())
    }
}

// Example usage for Stack
const stackObject = new Store()

stackObject.push(10)
stackObject.push(20)
stackObject.push(30)
stackObject.pop();
stackObject.pop();
console.log(stackObject.peek());
console.log(stackObject.size());
console.log(stackObject.isEmpty());
stackObject.print()
