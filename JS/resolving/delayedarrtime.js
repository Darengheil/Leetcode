/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    if((arrivalTime+delayedTime)>=24){
        return arrivalTime + delayedTime - 24;
    }else{
        return arrivalTime + delayedTime;
    }
};

findDelayedArrivalTime(15,5)

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {    
    if ((arrivalTime+delayedTime)>=24) return arrivalTime + delayedTime - 24;
    return arrivalTime + delayedTime;
};