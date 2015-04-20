var range_lookup = require("../range_lookup");

function test() {
    range_lookup.addRule("300", '150 - 300', true);
    range_lookup.addRule(150, '<=150', false);
    range_lookup.addRule(450, '300 - 450', false);
    range_lookup.addRule(450, '450', true);
    range_lookup.defaultName = '>450';

    range_lookup.print();

    var values = [-5, 149, 150, 151, 299, 300, 301, 449, 450, 451];
    for (var i = 0; i < 0; i++) {
        values.push(parseInt(Math.random() * 500));
    }
    for (var i = 0; i < values.length; i++) {
        console.log("Number: " + values[i] + ", Bucket: " + range_lookup.getRange(values[i]));
    }
}

test();