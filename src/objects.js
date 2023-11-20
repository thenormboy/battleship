const Ship = (positionArray, sunkStatus) => {

    let position = positionArray
    let sunk = sunkStatus
    
    const getLength = (position) => {
        return position.length
    }

    const hit = (hitValue) => {

        const index = position.indexOf(hitValue)
        if (index > -1) {
            position.splice(index, 1)
        }
    }

    const isSunk = () => {
        if (getLength(position) == 0) {
            sunk = true
        }

        return sunk
    }

    return {
        position,
        hit,
        isSunk
    }
}

const Gameboard = () => {
    const row = 10
    const column = 10
    const board = []
    const occupiedCells = []
    const misssedCells = []
    const hitCells = []

    for (let i = 0; i < row; i++) {
        board[i] = []
        for (let j = 0; j < column; j++) {
            board[i].push(i.toString() + j.toString())
        }
    }

    const getBoard = () => board

    const placeShips = (ships) => {
        ships.forEach(ship => {
            ship.position.forEach(positionCell => {
                occupiedCells.push(positionCell)
            })
        });
    }

    const recieveAttack = (coordinate) => {
        if (occupiedCells.includes(coordinate)) {
            hitCells.push(coordinate)
        } else {
            misssedCells.push(coordinate)
        }
    }

    return {
        occupiedCells,
        getBoard,
        placeShips
    }
}

export { Ship, Gameboard }