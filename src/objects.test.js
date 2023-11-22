import { Ship, Gameboard, Player } from "./objects.js";

describe('testing gameboard functions', () => {

    let testBoard = Gameboard()
    let testShips

    beforeEach(() => {
        testShips = []
        testShips.push(Ship(['00', '01', '02', '03'], false))
        testShips.push(Ship(['45', '55'], false))
    })

    it('placeShips accuratly fills occupiedCells with correct positions', () => {
        testBoard.placeShips(testShips)
        expect(testBoard.getOccupiedCells()).toStrictEqual(['00', '01', '02', '03', '45', '55'])
    })

    it('recieveAttack fills hit cells with correct coordinate if cell is occupied', () => {
        testBoard.placeShips(testShips)
        testBoard.recieveAttack('02')
        expect(testBoard.hitCells).toStrictEqual(['02'])
    })

    it('recieveAttack removes occupied cell from all occupied cells after being hit', () => {
        testBoard.placeShips(testShips)
        testBoard.recieveAttack('02')
        expect(testBoard.getOccupiedCells()).toStrictEqual(['00', '01', '03', '45', '55'])
    })

    it('recieveAttack adds cell to missed cells if coordinate not occupied', () => {
        testBoard.placeShips(testShips)
        testBoard.recieveAttack('99')
        expect(testBoard.misssedCells).toStrictEqual(['99'])
    })

    it('checkGameOver returns true when all occupied spaces have been hit', () => {
        testBoard.placeShips(testShips)
        testBoard.recieveAttack('00')
        testBoard.recieveAttack('01')
        testBoard.recieveAttack('02')
        testBoard.recieveAttack('03')
        testBoard.recieveAttack('45')
        testBoard.recieveAttack('55')
        expect(testBoard.checkGameOver()).toBe(true)
    })

})

