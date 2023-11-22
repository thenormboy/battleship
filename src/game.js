import { Ship, Gameboard, Player } from "./objects.js";

const Game = () => {

    let players = []

    let playerOne = Player('Player One', false)
    let computer = Player('Computer', true)

    players.push(playerOne)
    players.push(computer)

    let activePlayer = players[0]

    const getActivePlayer = () => activePlayer

    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1]
        } else {
            activePlayer = players[0]
        }
    }

    return {
        getActivePlayer,
        switchPlayerTurn
    }

}