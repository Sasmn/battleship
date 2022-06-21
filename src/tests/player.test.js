import player from '../factory_functions/player';

const p1 = new player();
p1.buildFleet();

it('should be 11 rows', () => {
    expect(p1.freeSpaces.length).toBe(11);
});

it('should be 11 colums', () => {
    expect(p1.freeSpaces[10].length).toBe(13);
});

it('should not be 11 - true', () => {
    expect(p1.freeSpaces.every((v) => v.lenght == 11)).toBe(false)
});

it('should be 10 ships', () => {
    expect(p1.ships.length).toBe(10);
});

it('should less than 11', () => {
    expect(p1.freeSpaces[5].length).toBeLessThan(12);
});

const x = new p1.randPosition();
it('should be less than 11.v2', () => {
    p1.freeSpaces[0].splice(x.rndX, 1);
    p1.freeSpaces[x.rndY].splice(0, 1);
    expect(p1.freeSpaces[0].length).toBeLessThan(11);
});

it('should be 4 long', () => {
    expect(p1.ships[0].wounds.length).toBe(4);
});
