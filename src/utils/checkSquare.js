const checkHorizontally = (id,arr,index,columns) => {
    const ind = [];
        let i = index;
        const currentRow = Math.floor(id/columns);
      while(arr[id] === arr[id+i]) {
        if(Math.floor((id+i)/columns) === currentRow) {
            ind.push(id+i);
        }
        i+= index;
      }
    return ind;
}

const checkUpright = (id,arr,index) => {
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

    const left = checkHorizontally(id,arr,-1,columns);
    const right = checkHorizontally(id,arr,1,columns);
    const up = checkUpright(id,arr,-columns);
    const down = checkUpright(id,arr,columns);

    if(id % columns === 0 )  changeArr = [id,...right, ...up, ...down];
    else if(id % columns === columns-1) changeArr = [id,...left, ...up, ...down];
    else changeArr = [id,...left, ...right, ...up, ...down];
    return changeArr;
}

export default checkSquare;