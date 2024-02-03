const sets = new Set(['one','two','three']);

sets.add('four') // add value in set
// console.log(sets.has('five')); // check value exsist or not
console.log(sets.size); // give size of set from 1 
// sets.clear(); // make set empty
// sets.delete('one'); // make set value delete
console.log(sets); 

for (const item of sets) {
    console.log(item);
}
