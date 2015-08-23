// Line - a simple class to track a line composed of 2 Points
define(['./Point'], function(Point) {
  'use strict';
  class Line {
    constructor(x1, y1, x2, y2) {
      this.point1 = new Point(x1, y1);
      this.point2 = new Point(x2, y2);
    }
    toString()
    {
      return '(' + this.point1.x + ',' + this.point1.y + ') to (' + this.point2.x + ',' + this.point2.y + ')';
    }
  }

  return Line;
});
