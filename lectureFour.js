const map = new Map([['a',3],['b',5]]);
map.set('arham',true)
console.log(map.has('arham'));

console.log(map.size);
console.log(map)

for (const [keys,values] of map) {
    console.log(`${keys} : ${values}`)
}