/**
 * @param {string[]} words
 * @return {number}
 */
// var uniqueMorseRepresentations = function(words) {
//     let answ = [];
//     let morseCode = {
//         "a": ".-",
//         "b": "-...",
//         "c": "-.-.",
//         "d": "-..",
//         "e": ".",
//         "f": "..-.",
//         "g": "--.",
//         "h": "....",
//         "i": "..",
//         "j": ".---",
//         "k": "-.-",
//         "l": ".-..",
//         "m": "--",
//         "n": "-.",
//         "o": "---",
//         "p": ".--.",
//         "q": "--.-",
//         "r": ".-.",
//         "s": "...",
//         "t": "-",
//         "u": "..-",
//         "w": ".--",
//         "x": "-..-",
//         "y": "-.--",
//         "z": "--.."
//      };
//     for(let i = 0; i < words.length; i++){        
//         answ.push(words[i].toLowerCase().split("").map(el => {
//             return morseCode[el] ? morseCode[el] : el;
//          }).join(""));
//     };
//     return answ.filter((value, index, array) => array.indexOf(value) === index).length;
// };

var uniqueMorseRepresentations = function(words) {
    const symbols = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..'
    }

    return new Set(words.map(word => word.split('').map(letter => symbols[letter]).join(''))).size;
};
// Set - позволяет хранить уникальные значения
// uniqueMorseRepresentations(["gin","zen","gig","msg"]);

uniqueMorseRepresentations(["vtpke","vngc","vnqr","gbzx","qvdx"]);