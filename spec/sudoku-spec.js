describe('Triangle', function() {

  it('should test that all numbers in a column are unique', function() {
    var grid = new Grid(9,9)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should test that all numbers in a row are unique', function() {
    var grid = new Grid(9,9)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should test that all numbers in a 3x3 square are unique', function() {
    var grid = new Grid(9,9)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side3).not.toEqual(6)
  });

});
