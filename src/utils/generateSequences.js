const findFirst = (a,b=[]) => a.find(x => b.some(y => x == y));

const generateSergences = (arr,id) => {
    let sequence = [];
    /* Checks which sequence it has adjacent ids clicked square*/ 
    sequence = arr.find(item => item.includes(id));

    /*Create sequece of id which has the same color*/
    for(let i=0; i<arr.length; i++) {
      if(findFirst(sequence, arr[i])) sequence=[...sequence,...arr[i]];
    }
    for(let i=0; i<arr.length; i++) {
      if(findFirst(sequence, arr[i])) sequence=[...sequence,...arr[i]];
    }

    /*Remove id duplicate*/
    sequence = [...new Set(sequence)];
    
    return sequence;
}

export default generateSergences;