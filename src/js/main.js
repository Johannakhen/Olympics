import * as THREE from 'three'
import data from './data'
import Decor from './component/Decor'
import Globe from './component/Globe'
import Atmosphere from './component/Atmosphere'
// import Background from './component/Background'

import gui from 'libs/gui'

const OrbitControls = require('three-orbit-controls')(THREE)
var VARS = {
  message: 'Olympics',
  speed: .001,
  percent: -1,
}

class Main {
  constructor() {
    // var bscale = 3200;
    this.Globe = new Globe();
    this.GlobeAtmosphere = new Atmosphere();

    // backgrond
    // this.backgroundBack = new Background({style:"back",width:VARS.scale*4, height:VARS.scale, detail:0, speed: 0.3});
    // this.backgroundBack.group.position.z = -520;
    // this.backgroundBack.group.rotation.x = Math.PI;

    // this.backgroundFront = new Background({style:"front", width:VARS.scale*4, height:VARS.scale, detail:0, speed: 0.8});
    // this.backgroundFront.group.position.z = -510;
    this.Decor = new Decor(data);

    // this.Decor.scene.add(this.backgroundBack.group);
    // this.Decor.scene.add(this.backgroundFront.group);

    this.Decor.scene.add(this.GlobeAtmosphere.mesh)
    this.Decor.scene.add(this.Globe.mesh)

    this.camera = new THREE.PerspectiveCamera(30, data.w / data.h, 1, 10000);
    this.camera.position.z = data.distance

    // DAT.GUI : https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
    gui.add(VARS, 'message');
    gui.add(VARS, 'speed', -.2, .2);
    gui.add(VARS, 'percent', -1, 1);

    this.container = document.getElementById("container")

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(data.w, data.h);

    this.renderer.domElement.style.position = 'absolute';
    this.container.appendChild(this.renderer.domElement);
    // this.controls = new OrbitControls(this.camera) 
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    console.log(this);

  }

  animate() {
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
    data.distance += (data.distanceTarget - data.distance) * .3;
    if (data.distance <= 1001) {
      data.distance = data.distanceTarget;
    }
    this.camera.position.z = data.distance;
    this.Globe.mesh.rotation.y += VARS.speed
    this.Globe.mesh.material.uniforms.percent.value = VARS.percent;
    // this.backgroundBack.move()
    // this.backgroundFront.move()
    this.camera.lookAt(this.Globe.mesh.position);
    this.renderer.render(this.Decor.scene, this.camera);
  }

  onWindowResize(event) {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

var app = new Main()
app.animate()

window.addEventListener('resize', app.onWindowResize, false);