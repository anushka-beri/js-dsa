const nemo = ['nemo' , 'dory'];

function findNemo(array){
    for(i=0; i< array.length ; i++ ){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    console.log(array.length);
}

findNemo(nemo);