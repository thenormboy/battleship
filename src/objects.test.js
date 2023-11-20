import { Ship } from "./objects.js";

describe('testing ship functions', () => {

    let testCarrier
    let testPatrol

    beforeEach(() => {
        testCarrier = Ship(['00', '01', '02', '03'], false)
        testPatrol = Ship(['45', '55'], false)
    })

    it('hit removes coordinate from position array', () => {
        testCarrier.hit('00')
        expect(testCarrier.position).toStrictEqual(['01', '02', '03'])
    })

    it('hit dosent remove coordinate when not a hit', () => {
        testCarrier.hit('42')
        expect(testCarrier.position).toStrictEqual(['00', '01', '02', '03'])
    })

    it('hit removing all coordinates creates empty position array', () => {
        testPatrol.hit('45')
        testPatrol.hit('55')
        expect(testPatrol.position).toStrictEqual([])
    })

    it('isSunk returns false if ship has non empty position', () => {
        expect(testPatrol.isSunk()).toBe(false)
    })

    it('isSunk returns true if ship has empty position', () => {
        testPatrol.hit('45')
        testPatrol.hit('55')
        expect(testPatrol.isSunk()).toBe(true)
    })

})
