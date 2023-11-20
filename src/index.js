import { Ship } from "./objects.js";

let testCarrier = Ship(['00'], false)

testCarrier.hit('00')

console.log(testCarrier.isSunk())