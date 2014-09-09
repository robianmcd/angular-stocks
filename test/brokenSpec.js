/* global describe, it, expect */
/* global getDayName, factors, getWhitespaceCharacterName, ListFilter, add, isTen */

describe('Broken.js', function() {
    
    it('getDayName() should return \'Monday\' for September 15 2014', function() {
        expect(getDayName(new Date(2014, 8, 15))).toBe('Monday');
    });
    
    it('add() should add 0 and 1', function() {
        expect(add(0,1)).toBe(1);
    });
    
    it('add() should add -3 and 7', function() {
        expect(add(-3,7)).toBe(4);
    });
    
    it('isTen() should itentify 11 as not 10', function() {
        expect(isTen(11)).toBe(false);
    });

    it('factors() should return the factors of 12', function() {
        expect(factors(12)).toEqual([1,2,3,4,6,12]);
    });
    
    it('factors() should return the factors of 0', function() {
        expect(factors(0)).toEqual([]);
    });


    it('getWhitespaceCharacterName() should classify \\t as \'tab\'', function() {
        expect(getWhitespaceCharacterName('\t')).toBe('tab');
    });
    
    it('getWhitespaceCharacterName() should classify 0 as \'not whitespace\'', function() {
        expect(getWhitespaceCharacterName(0)).toBe('not whitespace');
    });

    
    it('ListFilter should remove all strings that do not match', function() {
        var abcFilter = new ListFilter(/abc/);
        expect(abcFilter.regexFilter).toEqual(/abc/);
        var filteredList = abcFilter.apply(['abc', 'abX', '1abc2']);
        
        expect(filteredList).toEqual(['abc', '1abc2']);
    });
});