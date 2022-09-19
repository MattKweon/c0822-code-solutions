function ExampleConstructor() {
}

console.log(ExampleConstructor.__proto__);
console.log('typeof', typeof ExampleConstructor);

var functionCall = new ExampleConstructor();
console.log(functionCall);

var instanceOf = functionCall instanceof ExampleConstructor;
console.log('instanceof', instanceOf);
