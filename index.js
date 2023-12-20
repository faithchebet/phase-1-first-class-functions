function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Example usage:
const myCallback = () => {
    console.log("Callback function is called!");
};

receivesAFunction(myCallback);


function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named function is called!");
    };
}

// Example usage:
const myNamedFunction = returnsANamedFunction();
myNamedFunction();  // Output: "Named function is called

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function is called!");
    };
}

// Example usage:
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();  // Output: "Anonymous function is called