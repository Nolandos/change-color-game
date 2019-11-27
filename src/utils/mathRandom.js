const mathRandom = (min, max, cur) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if(rand === cur) return mathRandom(min,max,cur);
    if(rand !== cur) return rand;
}

export default mathRandom;