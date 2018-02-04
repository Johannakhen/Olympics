import * as THREE from 'three'
import data from './data'
import Decor from './component/Decor'
import Globe from './component/Globe'
import Atmosphere from './component/Atmosphere'

import gui from 'libs/gui'
import { log } from 'three';

const OrbitControls = require('three-orbit-controls')(THREE)
var VARS = {
  message : 'Olympics',
  speed : .005,
}

class Main {
  constructor() {
    this.Globe = new Globe();
    this.GlobeAtmosphere = new Atmosphere();
    this.Decor = new Decor(data);
    this.Decor.scene.add(this.GlobeAtmosphere.mesh)
    this.Decor.scene.add(this.Globe.mesh)

    this.camera = new THREE.PerspectiveCamera(30, data.w / data.h, 1, 10000);
    this.camera.position.z = data.distance

    // this.controls = new OrbitControls(this.camera)

    // DAT.GUI : https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
    gui.add(VARS, 'message');
    gui.add(VARS, 'speed', -.2, .2);

    var container = document.getElementById("container")

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(data.w, data.h);

    this.renderer.domElement.style.position = 'absolute';
    container.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera) // this.controls = new OrbitControls(this.camera)
    this.animate = this.animate.bind(this);

  }

  animate() {
    // this.materialPercent += (1 - this.materialPercent ) * .1;
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
    data.distance += (data.distanceTarget - data.distance ) * .3;
    if(data.distance <= 1001) {
      data.distance = data.distanceTarget;
    }
    this.camera.position.z = data.distance;
    // console.log((data.distanceTarget - data.distance) * 0.3)
    this.Globe.mesh.rotation.y += VARS.speed 



    this.camera.lookAt(this.Globe.mesh.position);
    this.renderer.render(this.Decor.scene, this.camera);
  }
}

var app = new Main()
app.animate()