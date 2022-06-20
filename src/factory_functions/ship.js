const ship = (length, damage, sunk) => {
    const wounds = new Array(length);
    wounds.fill('safe');

    const size = length;

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
    return { wounds, size, hit, isSunk };
};

export default ship;
