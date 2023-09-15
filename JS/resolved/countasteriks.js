/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let checker = true, counter = 0;
    for(let i = 0; i < s.length; i++){        
        if(s[i] == '*' && checker){counter++}
        if(s[i] == "|"){checker = !checker}
    }
    return counter;
};

countAsterisks("l|*e*et|c**o|*de|");