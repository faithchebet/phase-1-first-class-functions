function receivesAFunction(callback) {
    callback();
}


const myCallback = () => {
    console.log("Callback function is called!");
};

receivesAFunction(myCallback);


function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named function is called!");
    };
}
const myNamedFunction = returnsANamedFunction();
myNamedFunction();  

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function is called!");
    };
}
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();  