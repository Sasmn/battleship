import getNeighbourCoords from './getNeighbourCoords';

/* check the neighbours: log the number of non-clicked neighbours (no neighbour is counted) */
function countClickedNeighbours(x, y, gbs) {
    let clickedNeighbours = 0;
    for (let i = 0; i < 4; i++) {
        const neighbour = getNeighbourCoords(i, x, y);
        let xn = neighbour.x;
        let yn = neighbour.y;

        if (
            xn > 9 ||
            xn < 0 ||
            yn > 9 ||
            yn < 0 ||
            gbs[0].children[10 * xn + yn].className.includes('clicked')
        ) {
            clickedNeighbours++;
        }
    }
    return clickedNeighbours;
}

export default countClickedNeighbours;
