import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';
import clickFeedback from './functions/clickFeedback';

/* build the two gameboard for the the player, and store the gameboard */
const gameboard = [];
for (let i = 0; i < 2; i++) {
    const b = buildGameboard();
    buildGrid(b.gb, b.p);

    gameboard[i] = b;
}

/* needed variables */
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
let clickedShip = gameboard[0].p.ships[0];
/* click coordinates of the player */
let xPlayer;
let yPLayer;

const gbs = document.querySelectorAll('.gameboard');
gbs[1].classList.add('active-gb');
gbs[0].classList.add('playerBoard');
gbs.forEach((b) => {
    Array.from(b.children).forEach((g) => {
        g.addEventListener('click', (e) => {
            if (gbs[1].className.includes('active')) {
                playerClick(e);
            } else if (gbs[0].className.includes('active')) {
                cpuClick();
            }
        });
    });
});

/* get a random neighbour: if it has been already clicked, or it is out of the grid, then select another one */
const getRandomNeighbour = (rndX, rndY) => {
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
        let neighbour = getRandomNeighbour(rndX, rndY);
        xn = neighbour.xn;
        yn = neighbour.yn;
    }

    return { xn, yn };
};

/* get the coordinates of the randomly selected neighbour */
const getNeighbourCoords = (index, xCoord, yCoord) => {
    switch (index) {
        case 0:
            xCoord++;
            break;
        case 1:
            xCoord--;
            break;
        case 2:
            yCoord++;
            break;
        case 3:
            yCoord--;
            break;
        default:
            break;
    }

    let x = xCoord;
    let y = yCoord;

    return { x, y };
};

/* get a random coordinate of the grid: if it has been clicked previously, get another one */
function getRandomCoordtinates() {
    const rndX = Math.floor(Math.random() * 10);
    const rndY = Math.floor(Math.random() * 10);
    let numb = 10 * rndX + rndY;

    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates();
    }

    return numb;
}

/* check the neighbours: log the number of non-clicked neighbours (no neighbour is counted) */
function countClickedNeighbours(x, y) {
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

function cpuClick() {
    if (sinking == false) {
        /* if no ship is sinking, then get a random coordinate */
        let numb = getRandomCoordtinates();

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
            numberOfClickedNeighbours = countClickedNeighbours(xp, yp);
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
        const neighbour = getRandomNeighbour(x, y);

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
    clickFeedback(gameboard[0].p, gbs[0], gbs[0].children[10 * x + y], x, y);

    /* count the clicked neighbours of the click */
    numberOfClickedNeighbours = countClickedNeighbours(x, y);

    /* if the click hit, then call for this function 'click' again */
    if (gbs[0].children[10 * x + y].className.includes('ship')) {
        setTimeout(function () {
            /* determine, weather the click sunk a ship, or not */
            if (clickedShip.isSunk() == true) {
                sinking = false;
            } else {
                sinking = true;
            }

            cpuClick();
        }, 500);
    } else {
        /* if the click didn't hit, then the player's turn comes */
        gbs[0].classList.toggle('active-gb');
        gbs[1].classList.toggle('active-gb');
    }
}

function playerClick(e) {
    /* get the number of the click */
    let numb = Array.from(gbs[1].children).indexOf(e.target);

    /* get the coordinates */
    for (let i = 0; i <= numb; i += 10) {
        xPlayer = i / 10;
        yPLayer = numb - xPlayer * 10;
    }
    /* get the DOM feedback */
    clickFeedback(gameboard[1].p, gbs[1], e.target, xPlayer, yPLayer);

    /* if the click didn't hit, then the cpu comes */
    if (!e.target.className.includes('ship')) {
        gbs[0].classList.toggle('active-gb');
        gbs[1].classList.toggle('active-gb');

        cpuClick();
    }
}
