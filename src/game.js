import { Ship, Gameboard, Player } from "./objects.js";

const Game = (() => {

    let players = []
    let gameboards = []

    let player = Player('Player')
    let playerGameboard = Gameboard()

    let computer = Player('Computer')
    let computerGameboard = Gameboard()

    players.push(player)
    players.push(computer)

    gameboards.push(playerGameboard)
    gameboards.push(computerGameboard)

    let activePlayer = players[0]
    let activeBoard = gameboards[0]

    const getActivePlayer = () => activePlayer
    const getActiveGameboard = () => activeBoard

    const getPlayer = () => player
    const getComputer = () => computer

    const getPlayerGameboard = () => playerGameboard
    const getComputerGameboard = () => computerGameboard

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
        getPlayer,
        getPlayerGameboard,
        getComputer,
        getComputerGameboard,
        getActivePlayer,
        getActiveGameboard,
        switchPlayerTurn,
        switchActiveBoard
    }

})();

export { Game } 