export default class Point {
  constructor() {
    var  geometry = new THREE.BoxGeometry(0.75, 0.75, 1);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,0,-0.5));

    this.point = new THREE.Mesh(geometry);
  }
}