// const fish = ['dory', 'bruce', 'marlin', 'nemo'];
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

// const large = new Array(10).fill('nemo');

// function findNemo2(fish){
//     let t0 = performance.now();
//     for(i=0; i< fish.length ; i++ ){
//         if(array[i] === 'nemo'){
//             console.log('Found NEMO!');
//         }
//     }
//     let t1 = performance.now();
//     console.log('Call to find both Nemo and Dory took' + (t1-t0) + 'milliseconds');
//     // console.log('length of array = ' + array.length);
// }

// findNemo2(everyone);

const boxes= [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]);  // O(1)
}

logFirstTwoBoxes(boxes); // O(2) ~ O(1)- Constant Time
