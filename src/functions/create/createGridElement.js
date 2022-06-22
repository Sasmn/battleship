function createGridElement(gb) {
    const g = document.createElement('div');
    g.classList.add('grid');
    gb.appendChild(g);
    return g;
}

export default createGridElement;