const mathRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

export default mathRandom;