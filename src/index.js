import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';
import ship from './factory_functions/ship';

for (let i = 0; i < 2; i++) {
    const b = buildGameboard();
    buildGrid(b.gb, b.p);
}

function getXNeighbour(x, y) {
    let xn = x;

    let v = Math.floor(Math.random()) > 0.5 ? 1 : -1;
    console.log(v);
    let yn = y;
    yn = yn + v;
}

const gbs = document.querySelectorAll('.gameboard');
gbs[1].classList.add('active-gb');
gbs[0].classList.add('playerBoard');
gbs.forEach((b) => {
    let x = 0;
    let y = 0;
    let sinking = false;
    let numb = 0;
    let clickedNeighbours;
    let shipDirection;
    let steps = 0;
    let v;
    let xp;
    let yp;
    Array.from(b.children).forEach((g) => {
        g.addEventListener('click', (e) => {
            gbs[0].classList.toggle('active-gb');
            gbs[1].classList.toggle('active-gb');

            if (gbs[0].className.includes('active')) {
                console.log(
                    gbs[0].children[x * 10 + y],
                    'clickedNeighbours: ' + clickedNeighbours,
                    'sinking: ' + sinking,
                    'steps: ' + steps,
                );
                if (sinking == true && clickedNeighbours != 4) {
                    if (shipDirection == undefined) {
                        const neighbour = getRandomNeighbour(x, y);

                        let xn = neighbour.xn;
                        let yn = neighbour.yn;

                        setTimeout(function () {
                            gbs[0].children[xn * 10 + yn].click();

                            if (
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('ship')
                            ) {
                                if (xn != x) {
                                    shipDirection = 'y';
                                } else {
                                    shipDirection = 'x';
                                }
                                xp = x;
                                yp = y;
                                x = xn;
                                y = yn;
                            }

                            clickedNeighbours = countClickedNeighbours(
                                clickedNeighbours,
                                x,
                                y,
                            );

                            console.log('shipDirection: ' + shipDirection);
                            if (shipDirection == 'y') {
                                let v = x - xp;
                                console.log(clickedNeighbours, v, x, y);
                                if (clickedNeighbours == 4) {
                                    v = -v;
                                    while (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('clicked') &&
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        console.log('e');
                                        xn = xn + v;
                                    }
                                    if (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        xn = xn - v;
                                        clickedNeighbours = 0;
                                        x = xn;
                                    }
                                }
                                console.log(clickedNeighbours, v, x, y);
                            }
                            if (shipDirection == 'x') {
                                let v = y - yp;
                                console.log(clickedNeighbours, v, x, y);
                                if (clickedNeighbours == 4) {
                                    v = -v;
                                    while (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('clicked') &&
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        console.log('e');
                                        yn = yn + v;
                                    }
                                    if (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        yn = yn - v;
                                        clickedNeighbours = 0;
                                        y = yn;
                                    }
                                }
                                console.log(clickedNeighbours, v, x, y);
                            }
                        }, 100);
                    } else {
                        if (shipDirection == 'x') {
                            let xn = x;
                            if (steps == 0) {
                                v = Math.floor(Math.random()) > 0.5 ? 1 : -1;
                            }
                            let yn = y + v;

                            while (
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('clicked') &&
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('ship')
                            ) {
                                yn = yn + v;
                            }

                            steps++;

                            setTimeout(function () {
                                gbs[0].children[xn * 10 + yn].click();

                                x = xn;
                                y = yn;

                                clickedNeighbours = countClickedNeighbours(
                                    clickedNeighbours,
                                    x,
                                    y,
                                );

                                console.log(clickedNeighbours, v, x, y);
                                if (
                                    clickedNeighbours == 4 ||
                                    !gbs[0].children[
                                        xn * 10 + yn
                                    ].className.includes('ship')
                                ) {
                                    v = -v;
                                    yn = yn + v;
                                    while (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('clicked') &&
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        console.log('e');
                                        yn = yn + v;
                                    }

                                    if (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        yn = yn - v;
                                        clickedNeighbours = 0;
                                        y = yn;
                                    }
                                }
                                console.log(clickedNeighbours, v, x, y);
                            }, 100);
                        } else if (shipDirection == 'y') {
                            let yn = y;
                            if (steps == 0) {
                                v = Math.floor(Math.random()) > 0.5 ? 1 : -1;
                            }
                            let xn = x + v;
                            while (
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('clicked') &&
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('ship')
                            ) {
                                xn = xn + v;
                            }

                            steps++;

                            setTimeout(function () {
                                gbs[0].children[xn * 10 + yn].click();

                                x = xn;
                                y = yn;

                                clickedNeighbours = countClickedNeighbours(
                                    clickedNeighbours,
                                    x,
                                    y,
                                );

                                console.log(clickedNeighbours, v, x, y);
                                if (
                                    clickedNeighbours == 4 ||
                                    !gbs[0].children[
                                        xn * 10 + yn
                                    ].className.includes('ship')
                                ) {
                                    v = -v;
                                    xn = xn + v;
                                    while (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('clicked') &&
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        console.log('e');
                                        xn = xn + v;
                                    }

                                    if (
                                        gbs[0].children[
                                            xn * 10 + yn
                                        ].className.includes('ship')
                                    ) {
                                        xn = xn - v;
                                        clickedNeighbours = 0;
                                        x = xn;
                                    }
                                }
                                console.log(clickedNeighbours, v, x, y);
                            }, 100);
                        }
                    }
                } else {
                    shipDirection = undefined;
                    sinking = false;
                    steps = 0;
                    numb = getRandomCoordtinates();
                    setTimeout(function () {
                        gbs[0].children[numb].click();

                        if (gbs[0].children[numb].className.includes('ship')) {
                            sinking = true;
                        } else {
                            sinking = false;
                        }

                        for (let i = 0; i <= numb; i += 10) {
                            x = i / 10;
                            y = numb - x * 10;
                        }

                        clickedNeighbours = countClickedNeighbours(
                            clickedNeighbours,
                            x,
                            y,
                        );
                    }, 100);
                }
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

    console.log(xn, yn);
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
function countClickedNeighbours(clickedNeighbours, rndX, rndY) {
    clickedNeighbours = 0;
    for (let i = 0; i < 4; i++) {
        const neighbour = getNeighbourCoords(i, rndX, rndY);
        let xn = neighbour.x;
        let yn = neighbour.y;

        /* if the neighbour is clicked or out of the grid, then add 1 to clickedNeighbour */
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
    // console.log(
    //     'clickedNeighbours-function: ' + clickedNeighbours,
    //     gbs[0].children[rndX * 10 + rndY],
    // );
    return clickedNeighbours;
}
