const ship = (length) => {
    let wounds = new Array(length);
    wounds.fill('safe');

    /* xStart, xEnd, yStart, yEnd */
    let position = new Array(4);
    let d = new Array(1);

    const endOfShip = (direction) => {
        if (direction == 'x') {
            d[0] = 'x';
            position[1] = position[0];
            position[3] = position[2] + length - 1;
        } else if (direction == 'y') {
            d[0] = 'y';
            position[1] = position[0] + length - 1;
            position[3] = position[2];
        }
    };

    const hit = (dmg) => {
        wounds[dmg] = 'hit';
        return wounds[dmg];
    };
    const isSunk = () => {
        if (wounds.every((v) => v == 'hit')) {
            return true;
        } else {
            return false;
        }
    };
    return { wounds, position, d, endOfShip, hit, isSunk };
};

export default ship;
