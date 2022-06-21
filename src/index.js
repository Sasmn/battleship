import './styles.css';
import player from './factory_functions/player';

const p1 = player();
p1.buildFleet();

const body = document.querySelector('body');
body.className = 'flex flex-col truncate';
console.log(p1.freeSpaces);
console.log(p1.ships);

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'flex';
    for (let j = 0; j < 10; j++) {
        const x = document.createElement('div');
        div.appendChild(x);
        x.innerHTML = p1.freeSpaces[i][j];
        x.className = 'grow-0 shrink-0 basis-44 bg-blue-700';
        if (String(p1.freeSpaces[i][j]).includes('ship')) {
            x.className += ' font-bold';
        }
    }
    body.appendChild(div);
}
