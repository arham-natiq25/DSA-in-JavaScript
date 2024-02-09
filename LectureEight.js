// STACK WITH POINTERS 
// it follows LIFO 

class Store {
    constructor() {
        this.items = {},
        // these are the pointers
        this.top = 0;
    }

    // push the element onto the stack
    push(data) {
        this.items[this.top] = data;
        this.top++;
    }

    // removes data from the top, follow LIFO
    pop() {
        if (!this.isEmpty()) {
            this.top--;
            const removedItem = this.items[this.top];
            delete this.items[this.top];
            return removedItem;
        }
        return null;
    }

    isEmpty() {
        return this.top === 0;
    }

    // return the top value that is inserted
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top - 1];
        }
        return null;
    }

    // size 
    size() {
        return this.top;
    }

    // print function returns or prints all the values 
    print() {
        console.log(this.items);
    }
}

// Example usage for Stack
const stackObject = new Store();

stackObject.push('arham');
stackObject.pop();
console.log(stackObject.isEmpty());
stackObject.push('saad');
stackObject.push('subhan');
console.log(stackObject.peek());
console.log(stackObject.size());

stackObject.print();
