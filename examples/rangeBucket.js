var range_lookup = require("../range_lookup");

function test() {
    var myLookup = new range_lookup();
    myLookup.addRule("300", '150 - 300', true);
    myLookup.addRule(150, '<=150', false);
    myLookup.addRule(450, '300 - 450', false);
    myLookup.addRule(450, '450', true);
    myLookup.defaultName = '>450';

    myLookup.print();

    var values = [-5, 149, 150, 151, 299, 300, 301, 449, 450, 451];
    for (var i = 0; i < 0; i++) {
        values.push(parseInt(Math.random() * 500));
    }
    for (var i = 0; i < values.length; i++) {
        console.log("Number: " + values[i] + ", Bucket: " + myLookup.getRange(values[i]));
    }
}

test();