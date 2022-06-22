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
            // console.log(
            //     ships[i].position,
            //     rnd.direction
            // );
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
        /* place neighbouring grid-s */
        if (d == 'x') {
            for (let i = 0; i < l + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (x - 1 + j <= 9 && y - 1 + i <= 9 && x - 1 + j >= 0 && y - 1 + i >= 0 ) {
                        freeSpaces[x - 1 + j][y - 1 + i] = 'x';
                    }
                }
            }
        } else if (d == 'y') {
            for (let i = 0; i < l + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (x - 1 + i <= 9 && y - 1 + j <= 9 && x - 1 + i >= 0 && y - 1 + j >= 0) {
                        freeSpaces[x - 1 + i][y - 1 + j] = 'x';
                    }
                }
            }
        }

        /* place the ships */
        if (d == 'x') {
            for (let i = 0; i < l; i++) {
                freeSpaces[x][y + i] = `ship ${l}`;
            }
        } else if (d == 'y') {
            for (let i = 0; i < l; i++) {
                freeSpaces[x + i][y] = `ship ${l}`;
            }
        }
    };

    const attack = (x, y, enemyBoard) => {
        enemyBoard.receiveAttack(x, y);
    };

    return {
        gb,
        freeSpaces,
        ships,
        buildFleet,
        testPosition,
        randPosition,
        placeShip,
    };
};

export default player;
