/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let answ = x;
        for(let i = functions.length-1; i >= 0; i--){
            answ = functions[i](answ);
        }
        return answ;
    }
};

let fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9

// fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
// fn(1)