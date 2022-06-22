import './styles.css';
import player from './factory_functions/player';

const p1 = player();
p1.buildFleet();

const body = document.querySelector('body');
body.classList.add('battleGround');
console.log(p1.freeSpaces);
console.log(p1.ships);

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'flex';
    for (let j = 0; j < 10; j++) {
        const x = document.createElement('div');
        // x.innerHTML = p1.freeSpaces[i][j];

        x.classList.add('grid');
        if (String(p1.freeSpaces[i][j]).includes('ship')) {
            // x.className += ' font-bold';
            // x.innerHTML = 'x';
            x.style.fontWeight = 'bold';
            x.style.fontSize = '2.5em';

            const line = document.createElement('div');
            const line2 = document.createElement('div');
            line.classList.add('line');
            line2.classList.add('line');

            x.append(line, line2);
        } else if (String(p1.freeSpaces[i][j]).includes('x')) {
            // x.innerHTML = 'n';
            const point = document.createElement('div');
            point.classList.add('point-dark');

            x.appendChild(point);
        } else {
            const point = document.createElement('div');
            point.classList.add('point');

            x.appendChild(point);
        }
        body.appendChild(x);
    }
    // body.appendChild(div);
}
