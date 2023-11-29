const Ship = (position) => {

    const getPosition = () => position

    const setPosition = (coords) => {
        getPosition().push(coords)
    }

    const createCarrier = (coordinate, orientation) => {
        coordinate = Number(coordinate)

        if (coordinate.toString().length == 1) {

            setPosition('0' + String(coordinate))

            for (let i = 1; i < 5; i++) {
                if (orientation == 'X') {
                    setPosition('0' + String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }

        } else {

            for (let i = 0; i < 5; i++) {
                if (orientation == 'X') {
                    setPosition(String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }
        }
    }

    function createBattleship(coordinate, orientation) {
        coordinate = Number(coordinate)

        if (coordinate.toString().length == 1) {

            setPosition('0' + String(coordinate))

            for (let i = 1; i < 4; i++) {
                if (orientation == 'X') {
                    setPosition('0' + String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }

        } else {

            for (let i = 0; i < 4; i++) {
                if (orientation == 'X') {
                    setPosition(String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }
        }    }

    function createDestroyer(coordinate, orientation) {
        coordinate = Number(coordinate)

        if (coordinate.toString().length == 1) {

            setPosition('0' + String(coordinate))

            for (let i = 1; i < 4; i++) {
                if (orientation == 'X') {
                    setPosition('0' + String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }

        } else {

            for (let i = 0; i < 4; i++) {
                if (orientation == 'X') {
                    setPosition(String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }
        }    }

    function createSubmarine(coordinate, orientation) {
        coordinate = Number(coordinate)

        if (coordinate.toString().length == 1) {

            setPosition('0' + String(coordinate))

            for (let i = 1; i < 3; i++) {
                if (orientation == 'X') {
                    setPosition('0' + String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }

        } else {

            for (let i = 0; i < 3; i++) {
                if (orientation == 'X') {
                    setPosition(String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }
        }    }

    function createPatrol(coordinate, orientation) {
        coordinate = Number(coordinate)

        if (coordinate.toString().length == 1) {

            setPosition('0' + String(coordinate))

            for (let i = 1; i < 2; i++) {
                if (orientation == 'X') {
                    setPosition('0' + String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }

        } else {

            for (let i = 0; i < 2; i++) {
                if (orientation == 'X') {
                    setPosition(String(coordinate + i))
                } else if (orientation == 'Y') {
                    setPosition(String(coordinate + (i * 10)))
                }
            }
        }    }

    return {
        getPosition,
        setPosition,
        createCarrier,
        createBattleship,
        createDestroyer,
        createSubmarine,
        createPatrol
    }
}

const Gameboard = () => {
    const row = 10
    const column = 10
    const board = []
    const misssedCells = []
    const hitCells = []
    const emptyCells = []
    const occupiedCells = []

    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j = 0; j < column; j++) {
            board[i].push(i.toString() + j.toString())
        }
    }

    const getBoard = () => board

    const getMissedCells = () => {
        return misssedCells
    }

    const setMissedCells = newCell => {
        misssedCells.push(newCell)
    }

    const getHitCells = () => {
        return hitCells
    }

    const setHitCells = newCell => {
        hitCells.push(newCell)
    }

    const getEmptyCells = () => {
        return emptyCells
    }

    const setEmptyCells = newCell => {
        emptyCells.push(newCell)
    }

    const getOccupiedCells = () => {
        return occupiedCells
    }

    const setOccupiedCells = newCell => {
        occupiedCells.push(newCell)
    }

    const placeShips = (ships) => {
        ships.forEach(ship => {
            ship.getPosition().forEach(positionCell => {
                setOccupiedCells(positionCell)
            })
        });
    }

    const placeEmptySpace = () => {
        getBoard().forEach(rowCell => {
            rowCell.forEach(columnCell => {
                if (!(getOccupiedCells().includes(columnCell))) {
                    setEmptyCells(columnCell)
                }
            })
        })
    }

    const recieveAttack = (coordinate) => {
        if (getOccupiedCells().includes(coordinate)) {
            setHitCells(coordinate)

        } else {
            setMissedCells(coordinate)
        }

        const occupiedIndex = getOccupiedCells().indexOf(coordinate)
        if (occupiedIndex > -1) {
            getOccupiedCells().splice(occupiedIndex, 1) 
        }

        const emptyIndex = getEmptyCells().indexOf(coordinate)
        if (emptyIndex > -1) {
            getEmptyCells().splice(emptyIndex, 1)
        }

    }

    const checkGameOver = () =>{
        if (getOccupiedCells().length == 0) {
            return true
        } else {
            return false
        }
    }

    const computerPosition = () => {

        return getEmptyCells()[Math.floor(Math.random() * getEmptyCells().length)]
    }

    const computerOrientation = () => {

        let orientations = ['X', 'Y']

        return orientations[Math.floor(Math.random() * orientations.length)]

    }

    return {
        getMissedCells,
        setMissedCells,
        getHitCells,
        setHitCells,
        getEmptyCells,
        setEmptyCells,
        getOccupiedCells,
        setOccupiedCells,
        getBoard,
        placeShips,
        placeEmptySpace,
        recieveAttack,
        checkGameOver,
        computerPosition,
        computerOrientation
    }
}

const Player = (name) => {
    const getName = () => name

    const row = 10
    const column = 10
    const possibleChoices = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            possibleChoices.push(i.toString() + j.toString())
        }
    }

    const getPossibleChoices = () => possibleChoices

    const computerAttack = () => {

            let attackCoordinate = getPossibleChoices()[Math.floor(Math.random() * getPossibleChoices().length)]

            const index = getPossibleChoices().indexOf(attackCoordinate)
            if (index > -1) {
                possibleChoices.splice(index, 1) 
            }

            return attackCoordinate
    }

    return {
        getName,
        computerAttack
    }
}

export { Ship, Gameboard, Player }