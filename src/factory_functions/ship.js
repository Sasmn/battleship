const ship = (length) => {
    let wounds = new Array(length);
    wounds.fill('safe');

    /* xStart, xEnd, yStart, yEnd */
    let position = new Array(4);

    const endOfShip = (direction) => {
        if (direction == 'x') {
            position[1] = position[0];
            position[3] = position[2] + length - 1;
        } else if (direction == 'y') {
            position[1] = position[0] + length - 1;
            position[3] = position[2];
        }
        console.log(direction, position)
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
    return { wounds, position, endOfShip, hit, isSunk };
};

export default ship;
