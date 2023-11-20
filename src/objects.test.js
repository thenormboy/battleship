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

})
