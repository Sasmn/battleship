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
            if (e.target.className.includes('clicked')) {
                e.preventDefault();
            }
            if (e.target.className.includes('ship')) {
                console.log('talált');
            } else {
                gbs[0].classList.toggle('active-gb');
                gbs[1].classList.toggle('active-gb');
            }
            if (gbs[0].className.includes('active')) {
                let numb = getRandomCoordtinates();

                setTimeout(function () {
                    gbs[0].children[numb].click();
                }, 800);
            }
        });
    });
});

let previousClickHit = false;
let rndX = Math.floor(Math.random() * 10);
let rndY = Math.floor(Math.random() * 10);
let numb = Math.floor(Math.random() * 100);
let r;
let freeNeighbours = 0;
function getRandomCoordtinates() {
    freeNeighbours = 0;
    checkNeighbours(freeNeighbours);

    console.log(freeNeighbours, numb, previousClickHit);
    if (previousClickHit == true && freeNeighbours != 4) {
        console.log('BIGJESZ');
        getRandomNeighbour();
        numb = 10 * rndX + rndY;

        if (!gbs[0].children[numb].className.includes('ship')) {
            switch (r) {
                case 0:
                    rndX++;
                    break;
                case 1:
                    rndX--;
                    break;
                case 2:
                    rndY++;
                    break;
                case 3:
                    rndY--;
                    break;
                default:
                    break;
            }
        }
        previousClickHit = true;
    } else {
        console.log('BIGNOO');
        rndX = Math.floor(Math.random() * 10);
        rndY = Math.floor(Math.random() * 10);
        numb = 10 * rndX + rndY;
        previousClickHit = gbs[0].children[numb].className.includes('ship')
            ? true
            : false;
    }

    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates();
    }

    return numb;
}

function getRandomNeighbour() {
    r = Math.floor(Math.random() * 4);
    switch (r) {
        case 0:
            rndX--;
            break;
        case 1:
            rndX++;
            break;
        case 2:
            rndY--;
            break;
        case 3:
            rndY++;
            break;
        default:
            break;
    }
    if (rndX > 9 || rndX < 0 || rndY > 9 || rndY < 0) {
        switch (r) {
            case 0:
                rndX++;
                break;
            case 1:
                rndX--;
                break;
            case 2:
                rndY++;
                break;
            case 3:
                rndY--;
                break;
            default:
                break;
        }
        getRandomNeighbour();
    }
}

function checkNeighbours() {
    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                rndX++;
                break;
            case 1:
                rndX--;
                break;
            case 2:
                rndY++;
                break;
            case 3:
                rndY--;
                break;
            default:
                break;
        }
        if (rndX > 9 || rndX < 0 || rndY > 9 || rndY < 0) {
            freeNeighbours++;
        } else if (
            gbs[0].children[10 * rndX + rndY].className.includes('clicked')
        ) {
            freeNeighbours++;
        }

        console.log(gbs[0].children[10 * rndX + rndY]);
        switch (i) {
            case 0:
                rndX--;
                break;
            case 1:
                rndX++;
                break;
            case 2:
                rndY--;
                break;
            case 3:
                rndY++;
                break;
            default:
                break;
        }
    }

    if (freeNeighbours == 4) {
        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    rndX++;
                    break;
                case 1:
                    rndX--;
                    break;
                case 2:
                    rndY++;
                    break;
                case 3:
                    rndY--;
                    break;
                default:
                    break;
            }

            if (rndX > 9 || rndX < 0 || rndY > 9 || rndY < 0) {
                switch (i) {
                    case 0:
                        rndX--;
                        break;
                    case 1:
                        rndX++;
                        break;
                    case 2:
                        rndY--;
                        break;
                    case 3:
                        rndY++;
                        break;
                    default:
                        break;
                }
            } else if (
                gbs[0].children[10 * rndX + rndY].className.includes('ship')
            ) {
                break;
            }
        }
    }
}
