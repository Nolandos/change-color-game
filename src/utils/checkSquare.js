const check = (id,arr,index) => {
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
    let next = [];

    const left = check(id,arr,-1);
    const right = check(id,arr,1);
    const up = check(id,arr,-columns);
    const down = check(id,arr,columns);

    if(id % columns === 0 )  changeArr = [id,...right, ...up, ...down];
    else if(id % columns === columns-1) changeArr = [id,...left, ...up, ...down];
    else changeArr = [id,...left, ...right, ...up, ...down];
    
    return changeArr;
}

export default checkSquare;