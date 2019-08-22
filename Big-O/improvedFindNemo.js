const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

// Basic method.

function findNemo(array){
    for(let i=0; i< array.length; i++){
        if(array[i]=== 'nemo'){
            console.log('Found NEMO!')
        }
    }
}

findNemo(everyone); 

// For each method

const findNemo2 = array =>{
    array.forEach(
        fish =>{
            if (fish === 'nemo'){
                console.log('Found NEMO!');
            }
        }
    )
}

findNemo2(everyone);

// For of method

const findNemo3 = array =>{
    for (let fish of array){
        if(fish === 'nemo'){
            console.log('Found NEMO!')
        }
    }
}

findNemo3(everyone);