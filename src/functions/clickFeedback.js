import logClick from '../factory_functions/logClick';
import styleRowNeighbours from './styling/styleRowNeighbours';
import styleColumnNeighnours from './styling/styleColumnNeighbours';

function clickFeedback(p, gb, g, i, j) {
    if (String(p.freeSpaces[i][j]).includes('ship')) {
        /* add appropiate styling */
        g.classList.add('ship-clicked');

        /* log the clicks coordinates */
        const click = logClick(gb, g);
        /* play the receiveAttack function */
        const ship = p.gb.receiveAttack(click.xCoord, click.yCoord);

        for (let i = 0; i < 4; i++) {
            let xn = setDiagonalNeighbourCoords(
                i,
                click.xCoord,
                click.yCoord,
            ).x;

            let yn = setDiagonalNeighbourCoords(
                i,
                click.xCoord,
                click.yCoord,
            ).y;

            if (xn > 9 || xn < 0 || yn > 9 || yn < 0) {
            } else {
                gb.children[xn * 10 + yn].classList.add('non-clicked');
            }
        }

        /* what to do, when ship is sunk */
        const sunk = ship.isSunk();
        if (sunk == true) {
            if (ship.d[0] == 'x') {
                styleRowNeighbours(ship, gb);
            } else if (ship.d[0] == 'y') {
                styleColumnNeighnours(ship, gb);
            }
        }
    } else {
        g.classList.add('non-clicked');
    }

    const won = p.gb.allShipsSunk();
    if (won) {
        alert('győztél more');
    }
}

export default clickFeedback;

const setDiagonalNeighbourCoords = (index, xCoord, yCoord) => {
    switch (index) {
        case 0:
            xCoord++;
            yCoord++;
            break;
        case 1:
            xCoord++;
            yCoord--;
            break;
        case 2:
            xCoord--;
            yCoord++;
            break;
        case 3:
            xCoord--;
            yCoord--;
            break;
        default:
            break;
    }

    let x = xCoord;
    let y = yCoord;

    return { x, y };
};
