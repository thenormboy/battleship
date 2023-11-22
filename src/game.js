import { Ship, Gameboard, Player } from "./objects.js";

const Game = (() => {

    let players = []
    let gameboards = []

    let playerOne = Player('Player One', false)
    let playerOneGameboard = Gameboard()

    let computer = Player('Computer', true)
    let computerGameboard = Gameboard()

    players.push(playerOne)
    players.push(computer)

    gameboards.push(playerOneGameboard, computerGameboard)

    let activePlayer = players[0]
    let activeBoard = gameboards[0]

    const getActivePlayer = () => activePlayer
    const getActiveGameboard = () => activeBoard

    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1]
        } else {
            activePlayer = players[0]
        }
    }

    const switchActiveBoard = () => {
        if (activeBoard === gameboards[0]) {
            activeBoard = gameboards[1]
        } else {
            activeBoard = gameboards[0]
        }
    }



    return {
        getActivePlayer,
        getActiveGameboard,
        switchPlayerTurn,
        switchActiveBoard
    }

})();

export { Game } 