const logClick = (gb, g) => {
    const pos = Array.from(gb.children).indexOf(g);
    let xCoord;
    let yCoord;
    for (let i = 0; i <= pos; i += 10) {
        xCoord = i / 10;
        yCoord = pos - i;
    }

    return { xCoord, yCoord };
};

export default logClick;
