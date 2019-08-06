function printFirstItemThenFirstHalfThenSayHi100Times(items){

    console.log(items[0]);  // prints first item

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex){    // prints first half
        console.log(items[index]);
        index++; 
    }

    for (var i=0; i < 100; i++){    // prints hi 100 times
        console.log("hi !");
    }
};