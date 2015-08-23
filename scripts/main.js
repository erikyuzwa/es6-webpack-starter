
// main entry point for our application
define(['./Point', './Line'], function(Point, Line) {
  'use strict';

  $(function() {
    let el = $('.container');
    let p1 = new Point(10, 10);
    let l1 = new Line(10, 10, 40, 50);
    el.append('<p>point a: ' + p1.toString() + '</p>');
    el.append('<p>line a: ' + l1.toString() + '</p>');
  });

});