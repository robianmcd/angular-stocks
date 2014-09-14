/*jshint eqeqeq:true*/

function add(x, y) {
    return x + y;
}

function isTen(num) {
    return num === 10;

}


function getDayName(date) {
    var day;
    switch (date.getDay()) {
        case 0:
            day = "Sunday";
        case 1:
            day = "Monday";
        case 2:
            day = "Tuesday";
            break;
        default:
            day = "The rest of the week...";
    }

    return day;
}

function factors(num) {
    var n_factors = [];

    for (var i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
        if (num % i === 0) {
            n_factors.push(i);
            if (num / i !== i) {
                n_factors.push(num / i);
            }
        }
    }
    n_factors.sort(function (a, b) {
        return a - b;
    }); // numeric sort
    return n_factors;
}


function getWhitespaceCharacterName(char) {
    if (char === '\t') {
        return 'tab';
    }

    if (char === '\n') {
        return 'line feed';
    }

    if (char === '\r') {
        return 'carriage return';
    }

    return 'not whitespace';
}


var ListFilter = function (regexFilter) {
    this.regexFilter = regexFilter;
};

/*
 Takes an array of strings and filters out the elements
 that do not match regexFilter.
 Returns the resulting array.
 */
ListFilter.prototype.apply = function (list) {
    var _this = this;

    return list.filter(
        function (element) {
            return element.match(_this.regexFilter);
        }
    );
};