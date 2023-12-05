import "./style.css"

import { Game } from "./game.js";
import { Ship } from "./objects.js";

let gameStart = false

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

            if (gameStart == true) {
                playerCellClick()
            }

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
                boardCell.classList.add('occupied-com-cell')
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
            
                if (boardCell.classList.contains('occupied-com-cell')) {
                    boardCell.classList.remove('occupied-com-cell')
                    boardCell.classList.add('hit-cell')
                    disableAllButtons()
                }
            
                if (boardCell.classList.contains('empty-cell')) {
                    boardCell.classList.remove('empty-cell')
                    boardCell.classList.add('missed-cell')
                    disableAllButtons()
                }

                if (gameStart == true) {
                    Game.getComputerGameboard().recieveAttack(boardCell.textContent)
                    displayPlayerOneBoard()
                }
            
            }

            boardCell.addEventListener('click', computerCellClick)
            playerTwoGameboard.appendChild(boardCell)
        })
    })
}

function displayPlaceCarrierBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    playerOneGameboard.textContent = [];

    let carrier = Ship([]);
    let possibleChoices = carrier.shipChoices(globalCoordinate, 5);

    function createRotateBtn() {
        const rotateContainer = document.querySelector('.rotate-container')
        rotateContainer.textContent = '';
        const rotateBtn = document.createElement('button')
        rotateBtn.textContent = 'Rotate'

        rotateBtn.addEventListener('click', () => {
            if (globalCoordinate == 'X') {
                globalCoordinate = 'Y'
            } else {
                globalCoordinate = 'X'
            }

            displayPlaceCarrierBoard()
        })

        rotateContainer.appendChild(rotateBtn)
    };

    createRotateBtn();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells-place')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            function playerCarrierCell() {

                boardCell.addEventListener('mouseenter', () => {
                    boardCell.style.backgroundColor = 'yellow'
                })

                boardCell.addEventListener('mouseleave', () => {
                    boardCell.style.backgroundColor = ''
                })

            }

            function playerCarrierClick() {
                boardCell.addEventListener('click', () => {
                    carrier.createCarrier(boardCell.getAttribute('id'), globalCoordinate)
                    playerShips.push(carrier)
                    Game.getPlayerGameboard().placeShips(playerShips);
                    Game.getPlayerGameboard().placeEmptySpace();
                    displayPlaceBattleshipBoard()
                    return
                })
            }

            if (possibleChoices.includes(boardCell.getAttribute('id'))) {
                playerCarrierCell()
                playerCarrierClick()
            }
            playerOneGameboard.appendChild(boardCell)
        })
    })
}

function displayPlaceBattleshipBoard(){
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    playerOneGameboard.textContent = [];

    let battleship = Ship([]);
    let openSpace = battleship.shipChoices(globalCoordinate, 4);
    let occupiedSpace = Game.getPlayerGameboard().getOccupiedCells();
    let possibleChoices = [];

    openSpace.forEach(value => {
        if (!(occupiedSpace.includes(value))) {
            possibleChoices.push(value)
        }
    });

    function createRotateBtn() {
        const rotateContainer = document.querySelector('.rotate-container')
        rotateContainer.textContent = '';
        const rotateBtn = document.createElement('button')
        rotateBtn.textContent = 'Rotate'

        rotateBtn.addEventListener('click', () => {
            if (globalCoordinate == 'X') {
                globalCoordinate = 'Y'
            } else {
                globalCoordinate = 'X'
            }

            displayPlaceBattleshipBoard()
        })

        rotateContainer.appendChild(rotateBtn)
    };

    createRotateBtn();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells-place')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } 

            function playerBattleshipCell() {

                boardCell.addEventListener('mouseenter', () => {
                    boardCell.style.backgroundColor = 'yellow'
                })

                boardCell.addEventListener('mouseleave', () => {
                    boardCell.style.backgroundColor = ''
                })

            }

            function playerBattleshipClick() {
                boardCell.addEventListener('click', () => {
                    battleship.createBattleship(boardCell.getAttribute('id'), globalCoordinate)
                    playerShips.push(battleship)
                    Game.getPlayerGameboard().placeShips(playerShips);
                    Game.getPlayerGameboard().placeEmptySpace();
                    displayPlayerOneBoard()
                    displayPlaceDestroyerBoard()
                    return
                })
            }

            if (possibleChoices.includes(boardCell.getAttribute('id'))) {
                playerBattleshipCell()
                playerBattleshipClick()
            }
            playerOneGameboard.appendChild(boardCell)
        })
    })
}

function displayPlaceDestroyerBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    playerOneGameboard.textContent = [];

    let destroyer = Ship([]);
    let openSpace = destroyer.shipChoices(globalCoordinate, 4);
    let occupiedSpace = Game.getPlayerGameboard().getOccupiedCells();
    let possibleChoices = [];

    openSpace.forEach(value => {
        if (!(occupiedSpace.includes(value))) {
            possibleChoices.push(value)
        }
    });

    function createRotateBtn() {
        const rotateContainer = document.querySelector('.rotate-container')
        rotateContainer.textContent = '';
        const rotateBtn = document.createElement('button')
        rotateBtn.textContent = 'Rotate'

        rotateBtn.addEventListener('click', () => {
            if (globalCoordinate == 'X') {
                globalCoordinate = 'Y'
            } else {
                globalCoordinate = 'X'
            }

            displayPlaceDestroyerBoard()
        })

        rotateContainer.appendChild(rotateBtn)
    };

    createRotateBtn();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells-place')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } 

            function playerDestroyerCell() {

                boardCell.addEventListener('mouseenter', () => {
                    boardCell.style.backgroundColor = 'yellow'
                })

                boardCell.addEventListener('mouseleave', () => {
                    boardCell.style.backgroundColor = ''
                })

            }

            function playerDestroyerClick() {
                boardCell.addEventListener('click', () => {
                    destroyer.createDestroyer(boardCell.getAttribute('id'), globalCoordinate)
                    playerShips.push(destroyer)
                    Game.getPlayerGameboard().placeShips(playerShips);
                    Game.getPlayerGameboard().placeEmptySpace();
                    displayPlayerOneBoard()
                    displayPlaceSubmarineBoard()
                    return
                })
            }

            if (possibleChoices.includes(boardCell.getAttribute('id'))) {
                playerDestroyerCell()
                playerDestroyerClick()
            }
            playerOneGameboard.appendChild(boardCell)
        })
    })
}

function displayPlaceSubmarineBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    playerOneGameboard.textContent = [];

    let submarine = Ship([]);
    let openSpace = submarine.shipChoices(globalCoordinate, 3);
    let occupiedSpace = Game.getPlayerGameboard().getOccupiedCells();
    let possibleChoices = [];

    openSpace.forEach(value => {
        if (!(occupiedSpace.includes(value))) {
            possibleChoices.push(value)
        }
    });

    function createRotateBtn() {
        const rotateContainer = document.querySelector('.rotate-container')
        rotateContainer.textContent = '';
        const rotateBtn = document.createElement('button')
        rotateBtn.textContent = 'Rotate'

        rotateBtn.addEventListener('click', () => {
            if (globalCoordinate == 'X') {
                globalCoordinate = 'Y'
            } else {
                globalCoordinate = 'X'
            }

            displayPlaceSubmarineBoard()
        })

        rotateContainer.appendChild(rotateBtn)
    };

    createRotateBtn();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells-place')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } 

            function playerSubmarineCell() {

                boardCell.addEventListener('mouseenter', () => {
                    boardCell.style.backgroundColor = 'yellow'
                })

                boardCell.addEventListener('mouseleave', () => {
                    boardCell.style.backgroundColor = ''
                })

            }

            function playerSubmarineClick() {
                boardCell.addEventListener('click', () => {
                    submarine.createSubmarine(boardCell.getAttribute('id'), globalCoordinate)
                    playerShips.push(submarine)
                    Game.getPlayerGameboard().placeShips(playerShips);
                    Game.getPlayerGameboard().placeEmptySpace();
                    displayPlayerOneBoard()
                    displayPlacePatrolBoard()
                    return
                })
            }

            if (possibleChoices.includes(boardCell.getAttribute('id'))) {
                playerSubmarineCell()
                playerSubmarineClick()
            }
            playerOneGameboard.appendChild(boardCell)
        })
    })
}

function displayPlacePatrolBoard() {
    const playerOneGameboard = document.querySelector('.player-one-gameboard');
    playerOneGameboard.textContent = [];

    let patrol = Ship([]);
    let openSpace = patrol.shipChoices(globalCoordinate, 2);
    let occupiedSpace = Game.getPlayerGameboard().getOccupiedCells();
    let possibleChoices = [];

    openSpace.forEach(value => {
        if (!(occupiedSpace.includes(value))) {
            possibleChoices.push(value)
        }
    });

    function createRotateBtn() {
        const rotateContainer = document.querySelector('.rotate-container')
        rotateContainer.textContent = '';
        const rotateBtn = document.createElement('button')
        rotateBtn.textContent = 'Rotate'

        rotateBtn.addEventListener('click', () => {
            if (globalCoordinate == 'X') {
                globalCoordinate = 'Y'
            } else {
                globalCoordinate = 'X'
            }

            displayPlacePatrolBoard()
        })

        rotateContainer.appendChild(rotateBtn)
    };

    createRotateBtn();

    (Game.getPlayerGameboard().getBoard()).forEach((rowCell) => {

        rowCell.forEach((columnCell) => {

            const boardCell = document.createElement('div')
            boardCell.textContent = columnCell
            boardCell.setAttribute('id', columnCell)
            boardCell.classList.add('player-one-cells-place')
            boardCell.style.width = '10%'
            boardCell.style.height = '10%'

            if (Game.getPlayerGameboard().getOccupiedCells().includes(boardCell.textContent)) {
                boardCell.classList.add('occupied-cell')
            } 

            function playerPatrolCell() {

                boardCell.addEventListener('mouseenter', () => {
                    boardCell.style.backgroundColor = 'yellow'
                })

                boardCell.addEventListener('mouseleave', () => {
                    boardCell.style.backgroundColor = ''
                })

            }

            function playerPatrolClick() {
                boardCell.addEventListener('click', () => {
                    patrol.createPatrol(boardCell.getAttribute('id'), globalCoordinate)
                    playerShips.push(patrol)
                    Game.getPlayerGameboard().placeShips(playerShips);
                    Game.getPlayerGameboard().placeEmptySpace();
                    displayPlayerOneBoard()
                    return
                })
            }

            if (possibleChoices.includes(boardCell.getAttribute('id'))) {
                playerPatrolCell()
                playerPatrolClick()
            }
            playerOneGameboard.appendChild(boardCell)
        })
    })
}

let globalCoordinate = "X"

function setRotateButton() {
    
    const rotateButton = document.getElementById('rotate')

    rotateButton.addEventListener('click', () => {
        if (globalCoordinate == 'X') {
            globalCoordinate = 'Y'
        } else {
            globalCoordinate = 'X'
        }
    })
}


let playerShips = []

let computerShips = []

function setComputerShips() {

    Game.getComputerGameboard().placeEmptySpace();

    let carrier = Ship([])
    carrier.createCarrier(String(100), Game.getComputerGameboard().computerOrientation())
    computerShips.push(carrier)

    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();


    let battleship = Ship([])

    while (Game.getComputerGameboard().checkOccupation(battleship.getPosition())) {

        battleship = Ship([])
        battleship.createBattleship(String(100), Game.getComputerGameboard().computerOrientation())

    }

    computerShips.push(battleship)
    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();


    let destroyer = Ship([])

    while (Game.getComputerGameboard().checkOccupation(destroyer.getPosition())) {

        destroyer = Ship([])
        destroyer.createDestroyer(String(100), Game.getComputerGameboard().computerOrientation())

    }

    computerShips.push(destroyer)
    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();

    let submarine = Ship([])

    while (Game.getComputerGameboard().checkOccupation(submarine.getPosition())) {

        submarine = Ship([])
        submarine.createSubmarine(String(100), Game.getComputerGameboard().computerOrientation())

    }

    computerShips.push(submarine)
    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();

    let patrol = Ship([])

    while (Game.getComputerGameboard().checkOccupation(patrol.getPosition())) {

        patrol = Ship([])
        patrol.createPatrol(String(100), Game.getComputerGameboard().computerOrientation())

    }

    computerShips.push(patrol)
    Game.getComputerGameboard().placeShips(computerShips);
    Game.getComputerGameboard().placeEmptySpace();

}

function gameController() {
    displayPlaceCarrierBoard()

}

gameController()
