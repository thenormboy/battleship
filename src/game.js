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

    let playerOneShips = []

    function setPlayerOneShips() {
        carrier = Ship(['42', '43', '44', '45', '46'], false)
        battleship = Ship(['09', '19', '29', '39'], false)
        destroyer = Ship(['72', '73', '74'], false)
        submarine = Ship(['67', '77', '87'], false)
        patrol = Ship(['11', '12'], false)

        playerOneShips.push(carrier)
        playerOneShips.push(battleship)
        playerOneShips.push(destroyer)
        playerOneShips.push(submarine)
        playerOneShips.push(patrol)
    }



    return {
        getActivePlayer,
        getActiveGameboard,
        switchPlayerTurn,
        switchActiveBoard
    }

})();

export { Game } 