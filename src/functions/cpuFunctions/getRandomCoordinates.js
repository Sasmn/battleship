/* get a random coordinate of the grid: if it has been clicked previously, get another one */
function getRandomCoordtinates(gbs) {
    const rndX = Math.floor(Math.random() * 10);
    const rndY = Math.floor(Math.random() * 10);
    let numb = 10 * rndX + rndY;

    if (gbs[0].children[numb].className.includes('clicked')) {
        numb = getRandomCoordtinates(gbs);
    }

    return numb;
}

export default getRandomCoordtinates;
