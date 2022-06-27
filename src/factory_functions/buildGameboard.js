import player from './player';

const buildGameboard = () => {
    const p = player();
    p.buildFleet();

    const gameboards = document.querySelector('#gameboards');
    const gb = document.createElement('div');
    gb.classList.add('gameboard');

    const div = document.createElement('div');
    div.appendChild(gb);
    gameboards.appendChild(div);

    return { gb, p };
};

export default buildGameboard;
