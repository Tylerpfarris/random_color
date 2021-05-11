
const randomColor = () => {
    const bgColors = [
    '#FFADAD',
    '#ffd6a5',
    '#fdffb6',
    '#caffbf',
    '#9bf6ff',
    '#a0c4ff',
    '#bdb2ff',
    '#ffc6ff',
    ];
    //generate a random number based on the length of bgColors array
    const n = Math.floor(Math.random() * bgColors.length);

    //return the color at the n index 
    return bgColors[n]
};

module.exports = {
    randomColor
};