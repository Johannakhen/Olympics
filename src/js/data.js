const data = {
  w: window.innerWidth || container.offsetWidth,
  h: window.innerHeight || container.offsetHeight,
  curZoomSpeed: 0,
  zoomSpeed: 50,
  mouse: { x: 0, y: 0 },
  mouseOnDown: { x: 0, y: 0 },
  targeT: { x: Math.PI * 3 / 2, y: Math.PI / 6.0 },
  rotation: { x: 2, y: 1 },
  target: { x: 2, y: 1 },
  targetOnDown: { x: 0, y: 0 },
  levitatingBlocks : [],
  blocks : [],
  distance: 100000,
  distanceTarget: 1000,
  padding: 40,
  PI_HALF: Math.PI / 2,
  cityPosition: [
    [{ city: 'mexico', lat: 19.2464696, lon: -99.10134979999998}],
    [{ city: 'Athène', lat: 37.9838096, lon: 23.727538800000048}],
    [{ city: 'Anver', lat: 51.2194475, lon: 4.40246430000002}],
    [{ city: 'Berlin', lat: 52.52000659999999, lon: 13.404953999999975}],
    [{ city: 'Melbourn', lat: -37.81361100000001, lon: 144.96305600000005}],
    [{ city: 'Rome', lat: 41.9027835, lon: 12.496365500000024}],
    [{ city: 'Munich', lat: 41.9027835, lon: 12.496365500000024}],
    [{ city: 'Montreal', lat: 45.5016889, lon: -73.56725599999999}],
    [{ city: 'Moscou', lat: 55.755826, lon: 37.617299900000035}],
    [{ city: 'Atlanta', lat: 33.7489954, lon: -84.3879824}],
    [{ city: 'Londre', lat: 51.5073509, lon: -0.12775829999998223}],
    [{ city: 'Rio', lat: -22.9068467, lon: -43.17289649999998}]
  ]
}
export default data;