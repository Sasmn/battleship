function addStylingGrid(p, g, i, j) {
    if (String(p.freeSpaces[i][j]).includes('ship')) {
        const line = document.createElement('div');
        const line2 = document.createElement('div');
        line.classList.add('line');
        line2.classList.add('line');

        g.append(line, line2);
        g.classList.add('ship');
    } else {
        const point = document.createElement('div');
        point.classList.add('point');

        g.appendChild(point);
        g.classList.add('non');
    }
}

export default addStylingGrid;
