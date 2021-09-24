function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    
    console.log(res);
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(spliceIntoChunks(arr, 2));