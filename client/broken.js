function doubleANum(num) {
    return num + 2;
}



function getWhitespaceCharacterName(char) {
    if (char == '\t') {
        return 'tab';
    }
    
    if (char == '\n') {
        return 'line feed';
    }
    
    if (char == '\r') {
        return 'carriage return';
    }
    
    return 'not whitespace';
}


var ListFilter = function(regexFilter) {
    this.regexFilter = regexFilter;
}

/*
Takes an array of strings and filters out the elements
that do not match regexFilter.
Returns the resulting array.
*/
ListFilter.prototype.apply = function(list) {
    
    
    return list.filter(
        function (element) {
            return element.match(this.regexFilter);
        }
    );
}