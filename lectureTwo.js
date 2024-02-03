const object = {
    name:'Arham',
    age:20,
    "test":true,

    TakeMyName : function () {
        console.log(this.name)
    }
}
object.hobby = "coding" // add object
delete object.age // delete object
console.log(object);
// console.log(object.age); // or console.log(object['age])

// console.log(object); // out put complete object 
// console.log(Object.keys(object)); // out put keys of object  
// console.log(Object.values(object)); // out put values OF KEYS
// for (const [key, value] of Object.entries(object)) {
//     console.log(`${key}: ${value}`);
//   } // entires function from whom we can get keys as well as 
// values 

// object.TakeMyName();