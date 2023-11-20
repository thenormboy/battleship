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
        
    }

    return {
        position,
        getLength,
        hit,
        isSunk
    }
}

export { Ship }