import clickFeedback from "../clickFeedback";
import cpuClick from "../cpuClick";

/* click coordinates of the player */
let xPlayer;
let yPLayer;

function playerClick(e, gameboard, gbs) {
    /* get the number of the click */
    let numb = Array.from(gbs[1].children).indexOf(e.target);

    /* get the coordinates */
    for (let i = 0; i <= numb; i += 10) {
        xPlayer = i / 10;
        yPLayer = numb - xPlayer * 10;
    }
    /* get the DOM feedback */
    clickFeedback(gameboard[1].p, gbs[1], e.target, xPlayer, yPLayer);

    /* if the click didn't hit, then the cpu comes */
    if (!e.target.className.includes('ship')) {
        gbs[0].classList.toggle('active-gb');
        gbs[1].classList.toggle('active-gb');

        cpuClick(gbs, gameboard);
    }
}

export default playerClick;