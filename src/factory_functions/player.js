import gameboard from './gameboard';
import ship from './ship';

const player = () => {
    const gb = gameboard();

    const ships = [];

    let freeSpaces = [];
    for (let i = 0; i < 10; i++) {
        freeSpaces[i] = [];
        for (let j = 0; j < 10; j++) {
            freeSpaces[i][j] = j;
        }
    }

    const buildFleet = () => {
        ships[0] = ship(4);
        for (let i = 0; i < 2; i++) {
            ships[i + 1] = ship(3);
        }
        for (let i = 0; i < 3; i++) {
            ships[i + 3] = ship(2);
        }
        for (let i = 0; i < 4; i++) {
            ships[i + 6] = ship(1);
        }

        /* random position, and weather it is free */
        for (let i = 0; i < ships.length; i++) {
            const rnd = randPosition();
            testPosition(ships[i], rnd);
            console.log(
                ships[i].position,
                rnd.direction,
                freeSpaces[rnd.rndX],
                ships[i].wounds.length,
            );
        }
    };

    const testPosition = (s, r) => {
        let placeIsFree = true;
        for (let j = 0; j < s.wounds.length; j++) {
            if (r.direction == 'x') {
                if (r.rndY + s.wounds.length > 9) {
                    placeIsFree = false;
                } else if (!freeSpaces[r.rndX].includes(r.rndY + j)) {
                    placeIsFree = false;
                }
            } else if (r.direction == 'y') {
                if (r.rndX + s.wounds.length > 9) {
                    placeIsFree = false;
                } else if (!freeSpaces[r.rndX + j].includes(r.rndY)) {
                    placeIsFree = false;
                }
            }
        }
        if (placeIsFree == true) {
            placeShip(s, r);
            deleteSpaces(s.wounds.length, r.rndX, r.rndY, r.direction);
        } else {
            const rnd = randPosition();
            testPosition(s, rnd);
        }
    };

    const randPosition = () => {
        const rndX = Math.floor(Math.random() * 10);
        const rndY = Math.floor(Math.random() * 10);
        const direction = Math.random() < 0.5 ? 'x' : 'y';

        return { rndX, rndY, direction };
    };

    const placeShip = (s, r) => {
        gb.placeShip(s, r.rndX, r.rndY, r.direction);
    };

    const deleteSpaces = (l, x, y, d) => {
        if (d == 'x') {
            for (let i = 0; i < l; i++) {
                // delete freeSpaces[x][y+1];
                // freeSpaces[x].splice(freespaces[x].indexOf(y + i), 1);
                freeSpaces[x][y + i] = `ship ${l}`;
            }
        } else if (d == 'y') {
            for (let i = 0; i < l; i++) {
                // freeSpaces[x + i].splice(freeSpaces[x + i].indexOf(y), 1);
                freeSpaces[x + i][y] = `ship ${l}`;
            }
        }
    };

    const attack = (x, y, enemyBoard) => {
        enemyBoard.receiveAttack(x, y);
    };

    return {
        freeSpaces,
        ships,
        buildFleet,
        testPosition,
        randPosition,
        placeShip,
    };
};

export default player;
