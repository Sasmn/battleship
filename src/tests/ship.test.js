import ship from '../factory_functions/ship';

const testShip = new ship(3);

it('should hit', () => {
    testShip.hit(1);
    expect(testShip.wounds[1]).toEqual('hit');
});

it('should sunk', () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toEqual(true);
});
