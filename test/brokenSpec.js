describe('Broken.js', function() {
    
    it('doubleANum() should double 2', function() {
        expect(doubleANum(2)).toBe(4);
    });
    
        it('doubleANum() should double 21', function() {
        expect(doubleANum(21)).toBe(42);
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
    })
});