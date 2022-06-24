import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';
import playerClick from './functions/cpuFunctions/playerClick';

/* build the two gameboard for the the player, and store the gameboard */
const gameboard = [];
for (let i = 0; i < 2; i++) {
    const b = buildGameboard();
    buildGrid(b.gb, b.p);

    gameboard[i] = b;
}

const gbs = document.querySelectorAll('.gameboard');
/* the player starts attacking */
gbs[1].classList.add('active-gb');
gbs[0].classList.add('playerBoard');

/* somehow only giving the enemys playerboard click event results in a bug */
gbs.forEach((b) => {
    Array.from(b.children).forEach((g) => {
        g.addEventListener('click', (e) => {
            if (gbs[1].className.includes('active')) {
                playerClick(e, gameboard, gbs);
            }
        });
    });
});
