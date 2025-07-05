const arrayChunks = (arr, size) => {
   let chunked = [];
   let index = 0;
   
   while( index < arr.length) {
    let chunk = arr.slice(index, index + size);
    console.log("----", chunk);

    chunked.push(chunk);

    index += size;
    
   }

   return chunked;
}

console.log(arrayChunks([1, 2, 3, 4, 5, 6, 7], 2));
