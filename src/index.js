import "./style.css"

import { Game } from "./game.js";
import { Ship } from "./objects.js";

Game

function displayHeader() {
    const playerOneHeader = document.querySelector('.player-one-header')
    const playerTwoHeader = document.querySelector('.player-two-header')

    playerOneHeader.textContent = Game.getActivePlayer().getName()
    Game.switchPlayerTurn()
    playerTwoHeader.textContent = Game.getActivePlayer().getName()
    Game.switchPlayerTurn()
}

function renderPlayerGameboard(coordinate) {

    if (Game.getPlayerGameboard().getOccupiedCells().includes(coordinate)) {
        coordinate.classList.add('occupied-cell')
    } else if (Game.getPlayerGameboard().getEmptyCells().includes(coordinate)) {
        coordinate.classList.add('empty-cell')
    } else if (Game.getPlayerGameboard().getHitCells().includes(coordinate)) {
        coordinate.classList.add('hit-cell')
    } else if (Game.getPlayerGameboard().getMissedCells().includes(coordinate)) {
        coordinate.classList.add('missed-cell')
    }
}

function displayPlayerOneBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    setPlayerShips();
    Game.getPlayerGameboard().placeShips(playerShips);
    Game.getPlayerGameboard().placeEmptySpace();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells')
            
            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } else if (Game.getPlayerGameboard().getEmptyCells().includes(boardCell.textContent)) {
                boardCell.classList.add('empty-cell')
            } else if (Game.getPlayerGameboard().getHitCells().includes(boardCell.textContent)) {
                boardCell.classList.add('hit-cell')
            } else if (Game.getPlayerGameboard().getMissedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('missed-cell')
            }

            boardCell.style.width = '10%'
            boardCell.style.height = '10%'
            playerOneGameboard.appendChild(boardCell)

        })
    })
}

function displayPlayerTwoBoard() {
    const playerTwoGameboard = document.querySelector('.player-two-gameboard');

    (Game.getComputerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-two-cells')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'
            playerTwoGameboard.appendChild(boardCell)

        })
    })
}


let playerShips = []

function setPlayerShips() {
    let carrier = Ship(['42', '43', '44', '45', '46'], false)
    let battleship = Ship(['09', '19', '29', '39'], false)
    let destroyer = Ship(['72', '73', '74'], false)
    let submarine = Ship(['67', '77', '87'], false)
    let patrol = Ship(['11', '12'], false)

    playerShips.push(carrier)
    playerShips.push(battleship)
    playerShips.push(destroyer)
    playerShips.push(submarine)
    playerShips.push(patrol)
}

displayHeader()
displayPlayerOneBoard()
displayPlayerTwoBoard()
