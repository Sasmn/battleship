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
        alert("győztél more")
    }
}

export default clickFeedback;
