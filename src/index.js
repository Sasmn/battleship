import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';
import playerClick from './functions/cpuFunctions/playerClick';

function generatePlayground() {
    /* build the two gameboard for the the player, and store the gameboard */
    const gameboard = [];
    for (let i = 0; i < 2; i++) {
        const b = buildGameboard();
        buildGrid(b.gb, b.p);

        gameboard[i] = b;
    }

    const gbs = document.querySelectorAll('.gameboard');
    /* the player starts attacking */
    gbs[0].classList.add('playerBoard');

    const startButton = document.querySelector('#start');
    startButton.addEventListener(
        'click',
        () => {
            gbs[1].classList.add('active-gb');
            startButton.style.display = 'none';
            const generateButton = document.querySelector('#generate');
            generateButton.style.display = 'none';
        },
        { once: true },
    );

    const playerBoard = document.querySelector('#gameboards > div:first-child');
    const player = document.createElement('h2');
    player.innerText = "player's board";

    const cpuBoard = document.querySelector('#gameboards > div:nth-child(2)');
    const cpu = document.createElement('h2');
    cpu.innerText = "cpu's board";
    playerBoard.insertBefore(player, gbs[0]);
    cpuBoard.insertBefore(cpu, gbs[1]);

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
}

function clearPLayground() {
    const gb = document.querySelector('#gameboards');
    gb.innerHTML = '';
}

// generatePlayground();

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', () => {
    clearPLayground();
    generatePlayground();
});

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', () => {
    clearPLayground();
    generatePlayground();

    const welcomePage = document.querySelector('#welcomePage');
    // newGame.style.display = "none";
    welcomePage.style.top = '100vh';
    welcomePage.style.backdropFilter = 'blur(0px)';

    const startButton = document.querySelector('#start');
    startButton.style.display = 'block';
    const generateButton = document.querySelector('#generate');
    generateButton.style.display = 'block';

    const gbs = document.querySelectorAll('.gameboard');
    gbs[0].classList.remove('active-gb');
    gbs[1].classList.remove('active-gb');
});
