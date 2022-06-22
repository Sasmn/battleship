import './styles.css';
import player from './factory_functions/player';
import ship from './factory_functions/ship';

const p1 = player();
p1.buildFleet();

const gameboards = document.querySelector('#gameboards');
const enemyGb = document.createElement('div');
enemyGb.classList.add('gameboard');
gameboards.appendChild(enemyGb);

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'flex';
    for (let j = 0; j < 10; j++) {
        const x = document.createElement('div');
        // x.innerHTML = p1.freeSpaces[i][j];

        /* build gameboard */
        x.classList.add('grid');
        if (String(p1.freeSpaces[i][j]).includes('ship')) {
            // x.className += ' font-bold';
            // x.innerHTML = 'x';
            x.style.fontWeight = 'bold';
            x.style.fontSize = '2.5em';

            const line = document.createElement('div');
            const line2 = document.createElement('div');
            line.classList.add('line');
            line2.classList.add('line');

            x.append(line, line2);
        } else {
            // x.innerHTML = 'n';
            const point = document.createElement('div');
            point.classList.add('point');

            x.appendChild(point);
        }
        enemyGb.appendChild(x);

        /* game action */
        x.addEventListener('click', (e) => {
            /* if a ship grid is clicked */
            if (String(p1.freeSpaces[i][j]).includes('ship')) {
                /* color it red */
                // x.style.backgroundColor = 'red';
                x.classList.add('ship');
                /* log the clicks coordinates */
                const pos = Array.from(enemyGb.children).indexOf(x);
                let xCoord;
                let yCoord;

                for (let i = 0; i <= pos; i += 10) {
                    xCoord = i / 10;
                    yCoord = pos - i;
                }
                // console.log(xCoord, yCoord);

                /* play the receiveAttack function */
                const ship = p1.gb.receiveAttack(xCoord, yCoord);
                console.log(ship);

                const sunk = ship.isSunk();

                /*  */
                if (sunk == true) {
                    console.log(sunk, ship.d[0]);
                    if (ship.d[0] == 'x') {
                        for (let i = 0; i < ship.wounds.length + 2; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (
                                    ship.position[0] - 1 + j <= 9 &&
                                    ship.position[2] - 1 + i <= 9 &&
                                    ship.position[0] - 1 + j >= 0 &&
                                    ship.position[2] - 1 + i >= 0 &&
                                    enemyGb.children[
                                        (ship.position[0] - 1 + j) * 10 +
                                            ship.position[2] -
                                            1 +
                                            i
                                    ].className != 'ship'
                                ) {
                                    // freeSpaces[x - 1 + j][y - 1 + i] = 'x';
                                    enemyGb.children[
                                        (ship.position[0] - 1 + j) * 10 +
                                            ship.position[2] -
                                            1 +
                                            i
                                    ].classList.add('non-ship');
                                }
                            }
                        }
                    } else if (ship.d[0] == 'y') {
                        for (let i = 0; i < ship.wounds.length + 2; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (
                                    ship.position[0] - 1 + i <= 9 &&
                                    ship.position[2] - 1 + j <= 9 &&
                                    ship.position[0] - 1 + i >= 0 &&
                                    ship.position[2] - 1 + j >= 0 &&
                                    enemyGb.children[
                                        (ship.position[0] - 1 + i) * 10 +
                                            ship.position[2] -
                                            1 +
                                            j
                                    ].className != 'ship'
                                ) {
                                    // freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                                    enemyGb.children[
                                        (ship.position[0] - 1 + i) * 10 +
                                            ship.position[2] -
                                            1 +
                                            j
                                    ].classList.add('non-ship');
                                }
                            }
                        }
                    }
                }
            } else {
                x.classList.add('non-ship');
            }

            const allShipsSunk = p1.gb.allShipsSunk();
            if (allShipsSunk == true) {
                alert('vége van tesó');
            }
        });
    }
}

function buildGameboard() {
    const player = player();
    player.buildFleet();

    const gameboards = document.querySelector('#gameboards');
    const gb = document.createElement('div');
    gb.classList.add('gameboard');
    gameboards.appendChild(gb);
}
