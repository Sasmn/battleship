import clickFeedback from './clickFeedback';
import getRandomCoordtinates from './cpuFunctions/getRandomCoordinates';
import getRandomNeighbour from './cpuFunctions/getRandomNeighbour';
import countClickedNeighbours from './cpuFunctions/countClickedNeighbours';

/* click coordinates of the cpu */
let x = 0;
let y = 0;
/* the coordinates of the previous click of the cpu */
let xp = 0;
let yp = 0;
/* the difference between the previous and the current clicks coordinates */
let vx;
let vy;
/* determine, weather the damaged ship is sinking, or not (already sunk, or no ship damaged) */
let sinking = false;
/* stores the number of clicked neighbours (function return) */
let numberOfClickedNeighbours;
/* variable, that stores the ships datas - used to determine, weather the ship has sunk or not - has a default value of first ship */
// let clickedShip = gameboard[0].p.ships[0];
let clickedShip;

function cpuClick(gbs, gameboard) {
    if (sinking == false) {
        /* if no ship is sinking, then get a random coordinate */
        let numb = getRandomCoordtinates(gbs);

        /* get the coordinates of the hit */
        for (let i = 0; i <= numb; i += 10) {
            x = i / 10;
            y = numb - x * 10;
        }
    } else if (sinking == true) {
        /* what to do, when the ship is hit, but not yet sunk */
        /* if the last element is not a ship, but the previous before that is a ship, than recalculate the number of clicked neighbours for the last ship */
        if (
            !gbs[0].children[10 * x + y].className.includes('ship') &&
            gbs[0].children[10 * xp + yp].className.includes('ship')
        ) {
            numberOfClickedNeighbours = countClickedNeighbours(xp, yp, gbs);
        }

        if (numberOfClickedNeighbours == 4) {
            /* get the opposite direction of clicking */
            vx = x - xp;
            vy = y - yp;

            /* get to the last clicked ship */
            x = x - vx;
            y = y - vy;

            /* while the grid element is clicked and is ship, step to the next element (going backwards) */
            while (
                gbs[0].children[10 * x + y].className.includes('clicked') &&
                gbs[0].children[10 * x + y].className.includes('ship')
            ) {
                x = x - vx;
                y = y - vy;
            }
            /* get back to the last ship (otherwise the cpu is looking for a free neighbour of an unclicked ship) */
            x = x + vx;
            y = y + vy;
        }

        /* if the last element is not a ship (the selected neighbour is not a ship), then go back to the last ship */
        if (!gbs[0].children[10 * x + y].className.includes('ship')) {
            x = xp;
            y = yp;
        }

        /* get a random neighbour of the selected element, that is not clicked */
        const neighbour = getRandomNeighbour(x, y, gbs);

        /* log the previous click, and the new */
        xp = x;
        yp = y;
        x = neighbour.xn;
        y = neighbour.yn;
    }

    /* look for the clicked ship (if any) in the factory functions */
    for (let i = 0; i < 10; i++) {
        if (
            gameboard[0].p.ships[i].position[0] <= x &&
            gameboard[0].p.ships[i].position[1] >= x &&
            gameboard[0].p.ships[i].position[2] <= y &&
            gameboard[0].p.ships[i].position[3] >= y
        ) {
            clickedShip = gameboard[0].p.ships[i];
        }
    }

    /* initiate the DOM feedback of the 'click' */
    setTimeout(function() {
        clickFeedback(gameboard[0].p, gbs[0], gbs[0].children[10 * x + y], x, y);

        /* count the clicked neighbours of the click */
        numberOfClickedNeighbours = countClickedNeighbours(x, y, gbs);
    
        /* if the click hit, then call for this function 'click' again */
        if (gbs[0].children[10 * x + y].className.includes('ship')) {
            /* determine, weather the click sunk a ship, or not */
            if (clickedShip.isSunk() == true) {
                sinking = false;
            } else {
                sinking = true;
            }
            cpuClick(gbs, gameboard);
            setTimeout(function () {
    
            }, 500);
        } else {
            setTimeout(function() {
                /* if the click didn't hit, then the player's turn comes */
                gbs[0].classList.toggle('active-gb');
                gbs[1].classList.toggle('active-gb');
            }, 500);
        }
    }, 500);

}

export default cpuClick;
