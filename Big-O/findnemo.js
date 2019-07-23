const nemo = ['nemo' , 'dory'];

function findNemo(array){
    let t0 = performance.now();
    for(i=0; i< array.length ; i++ ){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find both Nemo and Dory took' + (t1-t0) + 'milliseconds');
    // console.log('length of array = ' + array.length);
}

findNemo(nemo);