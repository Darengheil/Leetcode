/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

class ParkingSystem{
    constructor (big, medium, small){
        this.parking = [big, medium, small];
    }
    addCar(carType) {

        if(
            (carType == 1 && this.parking[0] == 0 ) ||
            (carType == 2 && this.parking[1] == 0) ||
            (carType == 3 && this.parking[2] ==0)
            ){
            return false
        }
        if(carType == 1) this.parking[0]--;
        if(carType == 2) this.parking[1]--;
        if(carType == 3) this.parking[2]--;
        return true;
    }
}

let test = new ParkingSystem(1,1,0);
console.log(test);
let what0 = test.addCar(1);
let what1 = test.addCar(2);
let what2 = test.addCar(3);
let what3 = test.addCar(1);
console.log(what0, what1, what2, what3);

// true, true, false, false