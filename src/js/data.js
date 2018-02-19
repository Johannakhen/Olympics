const data = {
  w: window.innerWidth || container.offsetWidth,
  h: window.innerHeight || container.offsetHeight,
  curZoomSpeed: 0,
  zoomSpeed: 50,
  mouse: { x: 0, y: 0 },
  mouseOnDown: { x: 0, y: 0 },
  rotation: { x: 0, y: 0 },
  target: { x: Math.PI * 3 / 2, y: Math.PI / 6.0 },
  targetOnDown: { x: 0, y: 0 },
  distance: 100000,
  distanceTarget: 1000,
  padding: 40,
  PI_HALF: Math.PI / 2,
  cityPosition: {
    mexico: [19.2464696,-99.10134979999998],
    Athène: [37.9838096,23.727538800000048],
    Anver: [51.2194475,4.40246430000002],
    Berlin: [52.52000659999999,13.404953999999975],
    Melbourn: [-37.81361100000001,144.96305600000005],
    Rome: [41.9027835,12.496365500000024],
    Munich: [41.9027835,12.496365500000024],
    Montreal: [45.5016889,-73.56725599999999],
    Moscou: [55.755826,37.617299900000035],
    Atlanta: [33.7489954,-84.3879824],
    Londre: [51.5073509,-0.12775829999998223],
    Rio: [-22.9068467,-43.17289649999998]
  }
}
export default data;