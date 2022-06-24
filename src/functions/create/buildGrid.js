import createGridElement from './createGridElement';
import addStylingGrid from '../styling/addStylingGrid';

function buildGrid(gb, p) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            /* create grid elements */
            const g = createGridElement(gb);
            addStylingGrid(p, g, i, j);
        }
    }
}

export default buildGrid;
