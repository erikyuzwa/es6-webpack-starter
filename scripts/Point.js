
// Point - a simple class to track points with x,y coords
define([], function() {
  'use strict';
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    toString()
    {
      return '(' + this.x + ',' + this.y + ')';
    }
  }

  return Point;
});
