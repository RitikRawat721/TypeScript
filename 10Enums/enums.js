// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// How to restrict user's Choice
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// enum automatically increase the value by 1 for the next constant if it's value is not given
var hcSeat = SeatChoice.AISLE; // 10
var hcSeat2 = SeatChoice.MIDDLE; // 11
var hcSeat3 = SeatChoice.WINDOW; // 12
// Here we have specified string value as well as numeric value with the next one incremented
var Random;
(function (Random) {
    Random["Green"] = "vegetables";
    Random["White"] = "color";
    Random[Random["Purple"] = 5] = "Purple";
    Random[Random["Yellow"] = 6] = "Yellow";
})(Random || (Random = {}));
var fruitQuant = 12 /* Fruits.Banana */; // In Js [const fruitQuant = 12] this will be the output
