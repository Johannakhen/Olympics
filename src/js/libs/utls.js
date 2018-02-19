const Util = {

  // @param Object position (2d lat/lon coordinates)
  // @return Object coords (x/y coordinates)
  // 
  // Calculates x, y coordinates based on
  // lat/lon coordinates.
  calculate2dPosition : function(coords) {
    var PI = Math.PI
    var phi = (90 + coords.lon) * PI / 180;
    var theta = (180 - coords.lat) * PI / 180;

    return {
      x: phi,
      y: PI - theta
    }
  }

}