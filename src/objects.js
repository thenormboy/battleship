const Ship = (position) => {

    const getPosition = () => position

    const setPosition = (coords) => {
        getPosition().push(coords)
    }

    return {
        getPosition,
        setPosition
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
        getBoard().forEach(cell => {
            if (!(getOccupiedCells().includes(cell))) {
                setEmptyCells(cell)
            }
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
        if (getOccupiedCells.length == 0) {
            return true
        } else {
            return false
        }
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
        checkGameOver
    }
}

const Player = (name, isAI) => {
    const getName = () => name
    const getIsAI = () => isAI

    const row = 10
    const column = 10
    const possibleChoices = []

    for (let i = 0; i < row; i++) {
        possibleChoices[i] = []
        for (let j = 0; j < column; j++) {
            possibleChoices[i].push(i.toString() + j.toString())
        }
    }

    const computerAttack = () => {

        if (getIsAI == true) {

            let attackCoordinate = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]

            const index = possibleChoices.indexOf(attackCoordinate)
            if (index > -1) {
                possibleChoices.splice(index, 1) 
            }

            return attackCoordinate
        }
    }

    return {
        getName,
        computerAttack
    }
}

export { Ship, Gameboard, Player }