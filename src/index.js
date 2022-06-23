import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';

for (let i = 0; i < 2; i++) {
    const b = buildGameboard();
    buildGrid(b.gb, b.p);
}

const gbs = document.querySelectorAll('.gameboard');
gbs[1].classList.add('active-gb');
gbs[0].classList.add('playerBoard');
gbs.forEach((b) => {
    Array.from(b.children).forEach((g) => {
        g.addEventListener('click', (e) => {
            gbs[0].classList.toggle('active-gb');
            gbs[1].classList.toggle('active-gb');

            // let numb;
            let sunkShip;
            let x;
            let y;
            if (gbs[0].className.includes('active')) {
                let numb = getRandomCoordtinates();

                if (gbs[0].children[numb].className.includes('ship')) {
                    sunkShip = numb;

                    for (let i = 0; i < numb; i += 10) {
                        x = i;
                        y = numb - x;
                    }
                    console.log(x, y, numb);
                }

                setTimeout(function () {
                    gbs[0].children[numb].click();
                }, 500);
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
    if (previousClickHit == true) {
        clickedNeighbours = countClickedNeighbours(
            clickedNeighbours,
            rndX,
            rndY,
        );
    }

    if (previousClickHit == true && clickedNeighbours != 4) {
        console.log('benn');
        const neighbour = getRandomNeighbour(rndX, rndY);

        let xn = neighbour.xn;
        let yn = neighbour.yn;

        numb = 10 * xn + yn;

        clickedNeighbours = countClickedNeighbours(clickedNeighbours, xn, yn);

        rndX = neighbour.xn;
        rndY = neighbour.yn;

        numb = 10 * rndX + rndY;

        clickedNeighbours = countClickedNeighbours(
            clickedNeighbours,
            rndX,
            rndY,
        );
        // previousClickHit = true;
        console.log(clickedNeighbours, previousClickHit, gbs[0].children[numb]);
    } else {
        rndX = Math.floor(Math.random() * 10);
        rndY = Math.floor(Math.random() * 10);
        numb = 10 * rndX + rndY;
    }

    previousClickHit = gbs[0].children[numb].className.includes('ship')
        ? true
        : false;
    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates();
    }

    console.log(clickedNeighbours);

    return numb;
}

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
        gbs[0].children[xn * 10 + yn].className.includes('ship')
    ) {
        getRandomNeighbour(rndX, rndY);
    }

    return { xn, yn };
};

/* check the neighbours: log the number of non-clicked neighbours (no neighbour is counted) */
function countClickedNeighbours(clickedNeighbours, rndX, rndY) {
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
            clickedNeighbours++;
        }
    }
    return clickedNeighbours;
}

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
