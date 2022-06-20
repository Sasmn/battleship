import ship from '../factory_functions/ship';

it('should work', () => {
    expect(2).toBe(2);
});

const testShip = new ship(3, [2, 3], false);

it('should have specific length', () => {
    expect(testShip.size).toBe(3);
});

it('should hit', () => {
    testShip.hit(0);
    expect(testShip.wounds[0]).toEqual('hit');
});

it('should sunk', () => {
    expect(testShip.isSunk()).toBe(false);
});
