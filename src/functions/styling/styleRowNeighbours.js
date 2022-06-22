function styleRowNeighbours(ship, gb) {
    for (let i = 0; i < ship.wounds.length + 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                ship.position[0] - 1 + j <= 9 &&
                ship.position[2] - 1 + i <= 9 &&
                ship.position[0] - 1 + j >= 0 &&
                ship.position[2] - 1 + i >= 0 &&
                !gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].className.includes('ship')
            ) {
                gb.children[
                    (ship.position[0] - 1 + j) * 10 + ship.position[2] - 1 + i
                ].classList.add('non-clicked');
            }
        }
    }
}

export default styleRowNeighbours;
