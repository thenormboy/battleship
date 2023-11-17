const Ship = (position, sunk) => {

    this.position = position
    this.sunk = sunk
    
    const getLength = (position) => {
        return position.length
    }

    const hit = () => {

    }

    const isSunk = () => {
        
    }

    return {
        getLength,
        hit,
        isSunk
    }
}

export {Ship}