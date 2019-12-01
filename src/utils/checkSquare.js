const check = (id,arr,index) => {
    const ind = [];
        let i = index;
        const currentRow = Math.floor(id/12);
      while(arr[id] === arr[id+i]) {
        if(Math.floor((id+i)/12) === currentRow) {
            ind.push(id+i);
        }
        i+= index;
      }
    return ind;
}

const checkP = (id,arr,index) => {
    const ind = [];
        let i = index;
        
      while(arr[id] === arr[id+i]) {
        ind.push(id+i);        
        i+= index;
      }
    return ind;
}

const checkSquare = (id, arr, columns) => {
    let changeArr = [id];

    const left = check(id,arr,-1);
    const right = check(id,arr,1);
    const up = checkP(id,arr,-columns);
    const down = checkP(id,arr,columns);

    if(id % columns === 0 )  changeArr = [id,...right, ...up, ...down];
    else if(id % columns === columns-1) changeArr = [id,...left, ...up, ...down];
    else changeArr = [id,...left, ...right, ...up, ...down];
    return changeArr;
}

export default checkSquare;
