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

function displayPlayerOneBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    setPlayerShips();

    let attackCoordinate = Game.getComputer().computerAttack()
    console.log(attackCoordinate)

    Game.getPlayerGameboard().placeShips(playerShips);
    Game.getPlayerGameboard().placeEmptySpace();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'
            
            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } else if (Game.getPlayerGameboard().getEmptyCells().includes(boardCell.textContent)) {
                boardCell.classList.add('empty-cell')
            } else if (Game.getPlayerGameboard().getHitCells().includes(boardCell.textContent)) {
                boardCell.classList.add('hit-cell')
            } else if (Game.getPlayerGameboard().getMissedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('missed-cell')
            }

            function playerCellClick() {

                if (boardCell.getAttribute('id') == attackCoordinate) {
            
                    if (boardCell.classList.contains('occupied-cell')) {
                        boardCell.classList.remove('occupied-cell')
                        boardCell.classList.add('hit-cell')
                    }
                
                    if (boardCell.classList.contains('empty-cell')) {
                        boardCell.classList.remove('empty-cell')
                        boardCell.classList.add('missed-cell')
                    }
                }
            }

            playerCellClick()

            playerOneGameboard.appendChild(boardCell)

        })
    })
}

function displayPlayerTwoBoard() {
    const playerTwoGameboard = document.querySelector('.player-two-gameboard');
    setComputerShips();
    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();

    (Game.getComputerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-two-cells')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getComputerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-com-cell')
            } else if (Game.getComputerGameboard().getEmptyCells().includes(boardCell.textContent)) {
                boardCell.classList.add('empty-cell')
            } else if (Game.getComputerGameboard().getHitCells().includes(boardCell.textContent)) {
                boardCell.classList.add('hit-cell')
            } else if (Game.getComputerGameboard().getMissedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('missed-cell')
            }

            function computerCellClick() {

                if (boardCell.classList.contains('hit-cell')) {
                    return
                } else if (boardCell.classList.contains('missed-cell')) {
                    return
                }
            
                if (boardCell.classList.contains('occupied-com-cell')) {
                    boardCell.classList.remove('occupied-com-cell')
                    boardCell.classList.add('hit-cell')
                }
            
                if (boardCell.classList.contains('empty-cell')) {
                    boardCell.classList.remove('empty-cell')
                    boardCell.classList.add('missed-cell')
                }
            
                boardCell.removeEventListener('click', computerCellClick)
            
            }

            boardCell.addEventListener('click', computerCellClick)

            playerTwoGameboard.appendChild(boardCell)

        })
    })
}


let playerShips = []

function setPlayerShips() {
    let carrier = Ship(['42', '43', '44', '45', '46'])
    let battleship = Ship(['09', '19', '29', '39'])
    let destroyer = Ship(['72', '73', '74'])
    let submarine = Ship(['67', '77', '87'])
    let patrol = Ship(['11', '12'])

    playerShips.push(carrier)
    playerShips.push(battleship)
    playerShips.push(destroyer)
    playerShips.push(submarine)
    playerShips.push(patrol)
}

let computerShips = []

function setComputerShips() {
    let carrier = Ship(['42', '43', '44', '45', '46'])
    let battleship = Ship(['09', '19', '29', '39'])
    let destroyer = Ship(['72', '73', '74'])
    let submarine = Ship(['67', '77', '87'])
    let patrol = Ship(['11', '12'])

    computerShips.push(carrier)
    computerShips.push(battleship)
    computerShips.push(destroyer)
    computerShips.push(submarine)
    computerShips.push(patrol)
}

displayHeader()
displayPlayerOneBoard()
displayPlayerTwoBoard()
