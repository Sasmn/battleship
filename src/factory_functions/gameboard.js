import ship from './ship';

const gameboard = () => {
    let missedShots = [];
    let ships = [];

    const placeShip = (ship, x, y, direction) => {
        ship.position[0] = x;
        ship.position[2] = y;
        ship.endOfShip(direction);
        ships.push(ship);
    };

    const receiveAttack = (x, y) => {
        for (let i = 0; i < ships.length; i++) {
            if (
                ships[i].position[0] <= x &&
                ships[i].position[1] >= x &&
                ships[i].position[2] <= y &&
                ships[i].position[3] >= y
            ) {
                if (ships[i].position[0] == x) {
                    ships[i].hit(y - ships[i].position[2]);
                    return ships[i];
                } else {
                    ships[i].hit(x - ships[i].position[0]);
                    return ships[i];
                }
            } else {
                missedShots.push(x, y);
            }
        }
    };

    const allShipsSunk = () => {
        if (ships.every((v) => v.isSunk() == true)) {
            return true;
        } else {
            return false;
        }
    };

    return { ships, missedShots, placeShip, receiveAttack, allShipsSunk };
};

export default gameboard;
