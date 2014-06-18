
var types = {
    string: "a string",
    number: 42,
    boolean: true,
    array: [1,2,3,4]
};

if(types.number === 42){
    console.log("you found me")
}
else {
    types.boolean === true
    console.log("you lost me")
}
var key;

for(key in types) {
    console.log(key, types[key])
    console.log('========')
}

var i;
console.log('iterating array')
for (i=0; i< types.array.length; i++) { //reset i to zero, while i is less than the amount in the array, increments variable
    console.log(i, types.array[i]);
}