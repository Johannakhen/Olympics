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
    // gui.add(VARS, 'speed', -.2, .2);
    gui.add(VARS, 'percent', -1, 1);

    this.container = document.getElementById("container")

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(data.w, data.h);

    this.renderer.domElement.style.position = 'absolute';
    this.container.appendChild(this.renderer.domElement);
    // this.controls = new OrbitControls(this.camera) 
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

  }

  center(pos) {

    data.target = this.calculate2dPosition(pos);

  }

  calculate2dPosition(coords) {

    var phi = (90 + coords.lon) * Math.PI / 180;
    var theta = (180 - coords.lat) * Math.PI / 180;

    return {
      x: phi,
      y: Math.PI - theta
    }

  }


  set3dPosition(mesh, coords) {
    if(!coords)
      coords = mesh.userData;

    var x = coords.x;
    var y = coords.y;
    var altitude = coords.altitude;

    mesh.position.set(
      altitude * Math.sin(x) * Math.cos(y),
      altitude * Math.sin(y),
      altitude * Math.cos(x) * Math.cos(y)
      );
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.render();
  }

  render() {
    // data.distance += (data.distanceTarget - data.distance) * .3;

    // Rotate towards the target
    data.rotation.x += (data.target.x - data.rotation.x) * 0.1;
    data.rotation.y += (data.target.y - data.rotation.y) * 0.1;
    data.distance += (data.distanceTarget -data.distance) * 0.3;

    if (data.distance <= 1001) {
      data.distance = data.distanceTarget;
    }

    this.set3dPosition(this.camera, {
      x: data.rotation.x,
      y: data.rotation.y,
      altitude: data.distance
    });

    // this.Globe.mesh.rotation.y += VARS.speed
    this.Globe.mesh.material.uniforms.percent.value = VARS.percent;
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
var pos = [
[19.2464696,-99.10134979999998],
[37.9838096,23.727538800000048],
[51.2194475,4.40246430000002],
[52.52000659999999,13.404953999999975],
[-37.81361100000001,144.96305600000005],
[41.9027835,12.496365500000024],
[41.9027835,12.496365500000024],
[45.5016889,-73.56725599999999],
[55.755826,37.617299900000035],
[33.7489954,-84.3879824],
[51.5073509,-0.12775829999998223],
[-22.9068467,-43.17289649999998]
]

var d = {
  lat: pos[0][0],
  lon: pos[0][1],
};
window.data = d;
window.App = app;
window.addEventListener('resize', app.onWindowResize, false);

// pour essayer lancer dans la console App.center(data) 