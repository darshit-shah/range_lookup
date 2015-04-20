var range_lookup = require("../range_lookup")

function test() {
    var range_lookup28 = new range_lookup();
    var range_lookup29 = new range_lookup();
    var range_lookup30 = new range_lookup();
    var range_lookup31 = new range_lookup();

    range_lookup28.addRule(7, 'W1', true);
    range_lookup28.addRule(14, 'W2', true);
    range_lookup28.addRule(21, 'W3', true);
    range_lookup28.addRule(28, 'W4', true);

    range_lookup29.addRule(7, 'W1', true);
    range_lookup29.addRule(14, 'W2', true);
    range_lookup29.addRule(21, 'W3', true);
    range_lookup29.addRule(29, 'W4', true);

    range_lookup30.addRule(7, 'W1', true);
    range_lookup30.addRule(15, 'W2', true);
    range_lookup30.addRule(22, 'W3', true);
    range_lookup30.addRule(30, 'W4', true);

    range_lookup31.addRule(7, 'W1', true);
    range_lookup31.addRule(15, 'W2', true);
    range_lookup31.addRule(23, 'W3', true);
    range_lookup31.addRule(31, 'W4', true);

    range_lookup28.print();
    range_lookup29.print();
    range_lookup30.print();
    range_lookup31.print();

    var values = ["2015-01-5", "2015-01-15", "2015-01-22", "2015-02-5", "2015-02-15", "2015-02-22", "2015-04-5", "2015-04-15", "2015-04-22", "2016-02-5", "2016-02-15", "2016-02-22"];
    for (var i = 0; i < values.length; i++) {
        var lastDate = new Date(values[i]);
        lastDate.setMinutes(lastDate.getMinutes() + lastDate.getTimezoneOffset());
        lastDate.setDate(1);
        lastDate.setMonth(lastDate.getMonth() + 1);
        lastDate.setDate(lastDate.getDate() - 1);
        if (lastDate.getDate() == 28)
            console.log("Date: " + values[i] + ", TotalDays: " + lastDate.getDate() + " Week: " + range_lookup28.getRange(new Date(values[i]).getDate()));
        else if (lastDate.getDate() == 29)
            console.log("Date: " + values[i] + ", TotalDays: " + lastDate.getDate() + " Week: " + range_lookup29.getRange(new Date(values[i]).getDate()));
        else if (lastDate.getDate() == 30)
            console.log("Date: " + values[i] + ", TotalDays: " + lastDate.getDate() + " Week: " + range_lookup30.getRange(new Date(values[i]).getDate()));
        else if (lastDate.getDate() == 31)
            console.log("Date: " + values[i] + ", TotalDays: " + lastDate.getDate() + " Week: " + range_lookup31.getRange(new Date(values[i]).getDate()));
    }
}

test();