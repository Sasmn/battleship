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
let rndX;
let rndY;
let numb
function getRandomCoordtinates() {
    if (previousClickHit == true) {
        switch (Math.floor(Math.random() * 4)) {
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
        numb = 10 * rndX + rndY;
    }
    else{
        rndX = Math.floor(Math.random() * 10);
        rndY = Math.floor(Math.random() * 10);
        numb = 10 * rndX + rndY;
    }

    console.log(gbs[0].children[numb])
    previousClickHit = gbs[0].children[numb].className.includes('ship')
        ? true
        : false;

    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates();
    }

    return numb;
}
