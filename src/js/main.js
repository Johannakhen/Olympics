import * as THREE from 'three'
import data from './data'
import Decor from './component/Decor'
import Globe from './component/Globe'

const OrbitControls = require('three-orbitcontrols')

class Main {
  constructor(){
    this.Globe = new Globe();
    this.Decor = new Decor(data);
    this.Decor.scene.add(this.Globe.mesh)

    this.camera = new THREE.PerspectiveCamera(30, data.w / data.h, 1, 10000);
    this.camera.position.z = data.distance

    this.controls = new OrbitControls(this.camera)

    console.log(this.Decor)

    var container = document.getElementById("container")

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(data.w, data.h);

    this.renderer.domElement.style.position = 'absolute';
    container.appendChild(this.renderer.domElement);

    this.animate = this.animate.bind(this);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
    this.camera.lookAt(this.Globe.mesh.position);
    this.renderer.render(this.Decor.scene, this.camera);
  }
}

export default Main