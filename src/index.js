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
    playerOneGameboard.textContent = [];

    let attackCoordinate = Game.getComputer().computerAttack();

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

                    Game.getPlayerGameboard().recieveAttack(attackCoordinate)
                    displayPlayerTwoBoard()
                }
            }

            playerCellClick()

            playerOneGameboard.appendChild(boardCell)

        })
    })
}

function displayPlayerTwoBoard() {
    const playerTwoGameboard = document.querySelector('.player-two-gameboard');
    playerTwoGameboard.textContent = '';

    (Game.getComputerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-two-cells')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getComputerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } else if (Game.getComputerGameboard().getEmptyCells().includes(boardCell.textContent)) {
                boardCell.classList.add('empty-cell')
            } else if (Game.getComputerGameboard().getHitCells().includes(boardCell.textContent)) {
                boardCell.classList.add('hit-cell')
            } else if (Game.getComputerGameboard().getMissedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('missed-cell')
            }

            function disableAllButtons() {
                const boardCells = document.querySelectorAll('.player-two-cells')

                boardCells.forEach((cell) => {
                    cell.replaceWith(cell.cloneNode(true))
                })

            }

            function computerCellClick() {

                if (boardCell.classList.contains('hit-cell')) {
                    return
                } else if (boardCell.classList.contains('missed-cell')) {
                    return
                }
            
                if (boardCell.classList.contains('occupied-cell')) {
                    boardCell.classList.remove('occupied-cell')
                    boardCell.classList.add('hit-cell')
                    disableAllButtons()
                }
            
                if (boardCell.classList.contains('empty-cell')) {
                    boardCell.classList.remove('empty-cell')
                    boardCell.classList.add('missed-cell')
                    disableAllButtons()
                }

                Game.getComputerGameboard().recieveAttack(boardCell.textContent)
                displayPlayerOneBoard()
            
            }

            boardCell.addEventListener('click', computerCellClick)
            playerTwoGameboard.appendChild(boardCell)
        })
    })
}


let playerShips = []

function setPlayerShips() {
    let carrier = Ship([])
    let battleship = Ship([])
    let destroyer = Ship([])
    let submarine = Ship([])
    let patrol = Ship([])

    carrier.createCarrier('01', 'Y')
    battleship.createBattleship('13', 'X')
    destroyer.createDestroyer('71', 'X')
    submarine.createSubmarine('76', 'Y')
    patrol.createPatrol('53', 'X')

    playerShips.push(carrier)
    playerShips.push(battleship)
    playerShips.push(destroyer)
    playerShips.push(submarine)
    playerShips.push(patrol)

    Game.getPlayerGameboard().placeShips(playerShips);
    Game.getPlayerGameboard().placeEmptySpace();
}

let computerShips = []

function setComputerShips() {

    Game.getComputerGameboard().placeEmptySpace();

    let carrier = Ship([])
    carrier.createCarrier(String(Game.getComputerGameboard().computerPosition()), Game.getComputerGameboard().computerOrientation())
    computerShips.push(carrier)

    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();

    //let battleship = Ship([])
    //let destroyer = Ship([])
    //let submarine = Ship([])
    //let patrol = Ship([])

    //battleship.createBattleship('13', 'X')
    //destroyer.createDestroyer('71', 'X')
    //submarine.createSubmarine('76', 'Y')
    //patrol.createPatrol('53', 'X')

    //computerShips.push(battleship)
    //computerShips.push(destroyer)
    //computerShips.push(submarine)
    //computerShips.push(patrol)

//    for (let i = 0; i < 5; i++) {

  //      Game.getComputerGameboard().placeShips(computerShips);
    //    Game.getComputerGameboard().placeEmptySpace();

    //}

}

function gameController() {

    displayHeader()
    setPlayerShips();
    setComputerShips();
    displayPlayerOneBoard()
    displayPlayerTwoBoard()
}

gameController()
