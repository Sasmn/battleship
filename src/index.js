import './styles.css';
import player from './factory_functions/player';
import ship from './factory_functions/ship';

const p1 = player();
p1.buildFleet();

const body = document.querySelector('body');
body.classList.add('battleGround');
console.log(p1.freeSpaces);
console.log(p1.ships);

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

            x.classList.add('ship');
        } else if (String(p1.freeSpaces[i][j]).includes('x')) {
            // x.innerHTML = 'n';
            const point = document.createElement('div');
            point.classList.add('point-dark');

            x.appendChild(point);
            x.classList.add('neighbour');
        } else {
            const point = document.createElement('div');
            point.classList.add('point');

            x.appendChild(point);
            x.classList.add('nothing');
        }
        body.appendChild(x);

        /* game action */
        x.addEventListener('click', (e) => {
            /* if a ship grid is clicked */
            if (String(p1.freeSpaces[i][j]).includes('ship')) {
                /* color it red */
                // x.style.backgroundColor = 'red';
                x.classList.add('ship-clicked');
                /* log the clicks coordinates */
                const pos = Array.from(body.children).indexOf(x);
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
                                    ship.position[2] - 1 + i >= 0
                                ) {
                                    // freeSpaces[x - 1 + j][y - 1 + i] = 'x';
                                    body.children[
                                        (ship.position[0] - 1 + j) * 10 +
                                            ship.position[2] -
                                            1 +
                                            i
                                    ].style.backgroundColor = 'gray';
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
                                    ship.position[2] - 1 + j >= 0
                                ) {
                                    // freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                                    body.children[
                                        (ship.position[0] - 1 + i) * 10 +
                                            ship.position[2] -
                                            1 +
                                            j
                                    ].style.backgroundColor = 'gray';
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}
