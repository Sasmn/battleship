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
    let sunkShip = undefined;
    let x = 0;
    let y = 0;
    let sinking = false;
    let numb = 0;
    let clickedNeighbours;
    let shipDirection;
    let shipLength = 0;
    let steps = 0;
    Array.from(b.children).forEach((g) => {
        g.addEventListener('click', (e) => {
            gbs[0].classList.toggle('active-gb');
            gbs[1].classList.toggle('active-gb');

            if (gbs[0].className.includes('active')) {
                if (sinking == true && clickedNeighbours != 4) {
                    console.log(
                        'clickedNeighbours: ' + clickedNeighbours,
                        gbs[0].children[x * 10 + y],
                    );
                    if (shipDirection == undefined) {
                        const neighbour = getRandomNeighbour(x, y);

                        let xn = neighbour.xn;
                        let yn = neighbour.yn;
                        console.log(x + ' - ' + y + ' ||| ' + xn + ' - ' + yn);

                        setTimeout(function () {
                            gbs[0].children[xn * 10 + yn].click();

                            clickedNeighbours = countClickedNeighbours(
                                clickedNeighbours,
                                x,
                                y,
                            );

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

                                x = xn;
                                y = yn;
                                console.log(shipDirection, x, y);
                            }
                        }, 100);
                    } else {
                        if (shipDirection == 'x') {
                            let xn = x;

                            let v;
                            if (steps == 0) {
                                v = Math.floor(Math.random()) > 0.5 ? 1 : -1;
                            }
                            let yn = y;

                            steps++;
                            yn = yn + v;

                            if (yn > 9 || yn < 0) {
                                yn = yn - v;
                                v = -v;
                            }

                            while (
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('ship') &&
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('clicked')
                            ) {
                                yn = yn + v;
                            }
                            console.log(yn, xn, v);

                            console.log(gbs[0].children[xn * 10 + yn], steps);

                            setTimeout(function () {
                                gbs[0].children[xn * 10 + yn].click();

                                console.log(gbs[0].children[xn * 10 + yn]);
                                if (
                                    !gbs[0].children[
                                        xn * 10 + yn
                                    ].className.includes('ship')
                                ) {
                                    v = -v;
                                } else {
                                    x = xn;
                                    y = yn;
                                }

                                console.log();
                                clickedNeighbours = countClickedNeighbours(
                                    clickedNeighbours,
                                    x,
                                    y,
                                );
                            }, 100);
                        } else if (shipDirection == 'y') {
                            let yn = y;
                            let v;

                            if (steps == 0) {
                                v = Math.floor(Math.random()) > 0.5 ? 1 : -1;
                            }
                            let xn = x;

                            steps++;
                            xn = xn + v * steps;

                            if (xn > 9 || xn < 0) {
                                xn = xn - v;
                                v = -v;
                                steps = 0;
                            }

                            console.log(
                                gbs[0].children[xn * 10 + yn],
                                'steps: ' + steps,
                                'xn: ' + xn,
                                'yn: ' + yn,
                            );
                            while (
                                gbs[0].children[
                                    xn * 10 + yn
                                ].className.includes('clicked')
                            ) {
                                xn = xn + v;
                            }

                            console.log(xn, yn);
                            setTimeout(function () {
                                gbs[0].children[xn * 10 + yn].click();

                                if (
                                    !gbs[0].children[
                                        xn * 10 + yn
                                    ].className.includes('ship')
                                ) {
                                    x = xn;
                                    y = yn;
                                    v = -v;
                                    steps = 1;
                                }

                                clickedNeighbours = countClickedNeighbours(
                                    clickedNeighbours,
                                    x,
                                    y,
                                );
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
                            sunkShip = numb;
                            sinking = true;
                        } else {
                            (sunkShip = undefined), (sinking = false);
                        }

                        for (let i = 0; i <= numb; i += 10) {
                            x = i / 10;
                            y = numb - x * 10;
                        }
                        // clickedNeighbours = countClickedNeighbours(
                        //     clickedNeighbours,
                        //     x,
                        //     y,
                        // );
                        console.log('click: xCoord: ' + x + ' yCoord: ' + y);
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

let previousClickHit = false;
let clickedNeighbours = 0;
let rndX;
let rndY;
let numb;
function getRandomCoordtinates() {
    // if (previousClickHit == true) {
    //     clickedNeighbours = countClickedNeighbours(
    //         clickedNeighbours,
    //         rndX,
    //         rndY,
    //     );
    // }

    // if (previousClickHit == true && clickedNeighbours != 4) {
    //     const neighbour = getRandomNeighbour(rndX, rndY);

    //     /*
    //     let xn = neighbour.xn;
    //     let yn = neighbour.yn;

    //     numb = 10 * xn + yn;

    //     clickedNeighbours = countClickedNeighbours(clickedNeighbours, xn, yn);
    //     */
    //     rndX = neighbour.xn;
    //     rndY = neighbour.yn;

    //     numb = 10 * rndX + rndY;

    //     clickedNeighbours = countClickedNeighbours(
    //         clickedNeighbours,
    //         rndX,
    //         rndY,
    //     );
    //     // previousClickHit = true;
    // } else {
    //     rndX = Math.floor(Math.random() * 10);
    //     rndY = Math.floor(Math.random() * 10);
    //     numb = 10 * rndX + rndY;
    // }

    rndX = Math.floor(Math.random() * 10);
    rndY = Math.floor(Math.random() * 10);
    numb = 10 * rndX + rndY;

    previousClickHit = gbs[0].children[numb].className.includes('ship')
        ? true
        : false;
    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates();
    }

    return numb;
}

const getRandomNeighbour = (rndX, rndY) => {
    let r = Math.floor(Math.random() * 4);

    const neighbour = getNeighbourCoords(r, rndX, rndY);
    let xn = neighbour.x;
    let yn = neighbour.y;

    // console.log(xn, yn);
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

/* check the neighbours: log the number of non-clicked neighbours (no neighbour is counted) */
function countClickedNeighbours(clickedNeighbours, rndX, rndY) {
    clickedNeighbours = 0;
    for (let i = 0; i < 4; i++) {
        const neighbour = getNeighbourCoords(i, rndX, rndY);
        let xn = neighbour.x;
        let yn = neighbour.y;

        if (
            xn > 9 ||
            xn < 0 ||
            yn > 9 ||
            yn < 0 ||
            gbs[0].children[10 * xn + yn].className.includes('clicked')
        ) {
            // console.log('x-coord: ' + xn + ' y-coord :' + yn);
            // console.log(gbs[0].children[10 * xn + yn]);
            clickedNeighbours++;
        }
    }
    console.log('clickedNeighbours-function: ' + clickedNeighbours);
    return clickedNeighbours;
}

const getRandomNeighbour2 = (numb) => {
    let r = Math.floor(Math.random() * 4);

    const neighbour = getNeighbourCoords2(r, numb);
    let nn = neighbour.n;

    if (
        xn > 9 ||
        xn < 0 ||
        yn > 9 ||
        yn < 0 ||
        gbs[0].children[xn * 10 + yn].className.includes('ship')
    ) {
        getRandomNeighbour(rndX, rndY);
    }

    return { xn, yn };
};

const getNeighbourCoords2 = (index, numb) => {
    switch (index) {
        case 0:
            numb++;
            break;
        case 1:
            numb--;
            break;
        case 2:
            numb = numb + 10;
            break;
        case 3:
            numb = numb - 10;
            break;
        default:
            break;
    }

    let n = numb;

    return { n };
};
