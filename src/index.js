import { Ship } from "./objects.js";

let testCarrier = Ship(['00', '01', '02', '03'], false)

testCarrier.hit('00')

console.log(testCarrier.position)