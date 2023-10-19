/**
 * @return {Function}
 */
/* var createHelloWorld = function() {    
    return function(...args) {
        return "Hello World";
    }
}; */
// slow sol

/* var createHelloWorld = function() {    
    return () => "Hello World";
}; */

// fast sol

var createHelloWorld = function() {    
    return function() {
        return "Hello World";
    }
};
// fastest sol