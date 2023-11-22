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

    let occupiedCells = []

    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j = 0; j < column; j++) {
            board[i].push(i.toString() + j.toString())
        }
    }

    const getBoard = () => board

    const setOccupiedCells = newCell => {
        occupiedCells.push(newCell)
    }

    const getOccupiedCells = () => {
        return occupiedCells
    }

    const placeShips = (ships) => {

        occupiedCells = []

        ships.forEach(ship => {
            ship.position.forEach(positionCell => {
                setOccupiedCells(positionCell)
            })
        });
    }

    const recieveAttack = (coordinate) => {
        if (occupiedCells.includes(coordinate)) {
            hitCells.push(coordinate)

        } else {
            misssedCells.push(coordinate)
        }

        const index = occupiedCells.indexOf(coordinate)
        if (index > -1) {
            occupiedCells.splice(index, 1) 
        }
    }

    const checkGameOver = () =>{
        if (occupiedCells.length == 0) {
            return true
        } else {
            return false
        }
    }

    return {
        getOccupiedCells,
        hitCells,
        misssedCells,
        getBoard,
        placeShips,
        recieveAttack,
        checkGameOver
    }
}

const Player = (name, isAI) => {
    const getName = () => name

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

        if (isAI = true) {

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