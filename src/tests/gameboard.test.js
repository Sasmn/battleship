import gameboard from '../factory_functions/gameboard';
import ship from '../factory_functions/ship';

const testShip = new ship(3);
const g1 = new gameboard();

g1.placeShip(testShip, 3, 3, 'y');

it('should position', () => {
    expect(testShip.position[3]).toBe(5);
});

it('should receive attack', () => {
    g1.receiveAttack(3, 3);
    expect(testShip.wounds[0]).toEqual('hit');
});

it('should miss attack', () => {
    g1.receiveAttack(2, 3);
    expect(g1.missedShots[0]).toEqual(2, 3);
});

it('all should sunk', () => {
    const g2 = new gameboard();
    const testShip2 = new ship(1);
    g2.placeShip(testShip2, 3, 3, 'x');
    g2.receiveAttack(3, 3);

    expect(g2.allShipsSunk()).toEqual(true);
});
