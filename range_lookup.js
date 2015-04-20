"use strict";
function range_lookup() {
    var rules = [];

    //console.log('init called');

    this.addRule = function (upto, name, inclusive) {
        if (inclusive !== true && inclusive !== false) {
            throw new Error("Unexpected value of inclusive <" + inclusive + "> passed");
        }
        if (isFinite(upto) !== true) {
            throw new Error("Unexpected value of upto <" + upto + "> passed");
        }
        if (name == undefined) {
            throw new Error("Unexpected value of name <" + name + "> passed");
        }
        var myJSON = { value: +upto, name: name, inclusive: inclusive }
        for (var i = 0; i < rules.length; i++) {
            if (rules[i].value > myJSON.value) {
                rules.splice(i, 0, myJSON);
                return;
            }
            else if (rules[i].value == myJSON.value && rules[i].inclusive == true && myJSON.inclusive == false) {
                rules.splice(i, 0, myJSON);
                return;
            }
        }
        rules.push(myJSON);
        return;
    }

    this.getRange = function (value) {
        for (var i = 0; i < rules.length; i++) {
            if (value < rules[i].value) {
                return rules[i].name;
            }
            else if (rules[i].value == value && rules[i].inclusive == true) {
                return rules[i].name;
            }
        }
        return this.defaultName;
    }

    this.print = function () {
        console.log([].concat(rules).concat([{ 'defaultName': this.defaultName}]));
    }

    this.defaultName = 'unknown';

    return this;
}

module.exports = range_lookup;