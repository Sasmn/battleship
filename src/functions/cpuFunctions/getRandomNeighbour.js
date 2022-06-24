import getNeighbourCoords from './getNeighbourCoords';

/* get a random neighbour: if it has been already clicked, or it is out of the grid, then select another one */
const getRandomNeighbour = (rndX, rndY, gbs) => {
    let r = Math.floor(Math.random() * 4);

    const neighbour = getNeighbourCoords(r, rndX, rndY);
    let xn = neighbour.x;
    let yn = neighbour.y;

    if (
        xn > 9 ||
        xn < 0 ||
        yn > 9 ||
        yn < 0 ||
        gbs[0].children[xn * 10 + yn].className.includes('clicked')
    ) {
        let neighbour = getRandomNeighbour(rndX, rndY, gbs);
        xn = neighbour.xn;
        yn = neighbour.yn;
    }

    return { xn, yn };
};

export default getRandomNeighbour;
