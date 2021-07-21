function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
} 

function compressBoxesTwices(boxes, boxes2) { 
    boxes.array.forEach(box => {
        console.log(boxes);
    }); 
    boxes2.forEach(function(boxes2) { 
        console.log(boxes);
    });
}