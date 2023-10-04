/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let answ = 0;
    let counter = 0;
    while(counter < (seats.length + counter)){
        answ += Math.abs(Math.max(...seats)-Math.max(...students));
        seats.splice(seats.indexOf(Math.max(...seats)),1);
        students.splice(students.indexOf(Math.max(...students)),1);
        counter++;
    }
    return answ;
};

// var minMovesToSeat = function(seats, students) {
//     let answ = 0;
//     let counter = 0;
//     let initiallen = seats.length;
//     while(counter < initiallen){
//         answ += Math.abs(Math.max(...seats)-Math.max(...students));
//         seats.splice(seats.indexOf(Math.max(...seats)),1);
//         students.splice(students.indexOf(Math.max(...students)),1);
//         counter++;
//     }
//     return answ;
// };

minMovesToSeat([3,1,5], [2,7,4]);
minMovesToSeat([4,1,5,9], [1,3,2,6]);