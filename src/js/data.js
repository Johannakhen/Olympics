const data = {
  w : window.innerWidth || container.offsetWidth ,
  h : window.innerHeight || container.offsetHeight ,
  curZoomSpeed : 0,
  zoomSpeed : 50,
  mouse : { x: 0, y: 0 },
  mouseOnDown : { x: 0, y: 0 },
  rotation : { x: 0, y: 0 },
  target : { x: Math.PI*3/2, y: Math.PI / 6.0 },
  targetOnDown : { x: 0, y: 0 },
  distance : 100000,
  distanceTarget : 1000,
  padding : 40,
  PI_HALF : Math.PI / 2
}
export default data;