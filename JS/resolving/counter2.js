/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let start = init;
    const Oper = {
        increment(){
            return ++init;
        },
        decrement(){
            return --init;
        },
        reset(){            
            return init = start;
        }
    }
    return Oper;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */