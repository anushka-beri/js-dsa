const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairs(array){
    for( i = 0; i < array.length; i++){
        for( j = 0; j < array.length; j++){
            console.log( array[i], array[j] );
        }
    }
}

logAllPairs(boxes);