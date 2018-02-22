import * as THREE from 'three'
import data from './data'
import Decor from './component/Decor'
import Globe from './component/Globe'
import Atmosphere from './component/Atmosphere'
// import Background from './component/Background'

import gui from 'libs/gui'

var raycaster;
var mouse;
var objects = []

const OrbitControls = require('three-orbit-controls')(THREE)
var VARS = {
  message: 'Olympics',
  speed: .001,
  percent: 1.,
}

class Main {
  constructor() {

    this.add = this.add.bind(this);
    this.end = this.end.bind(this);
    this.start = this.start.bind(this);
    this.scroll = this.scroll.bind(this);
    this.zoomRelative = this.zoomRelative.bind(this);
    this.createBlock = this.createBlock.bind(this);
    this.addLevitatingBlock = this.addLevitatingBlock.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this)
    // EARTH 
    this.Globe = new Globe();
    // ATMOSPHERE
    this.GlobeAtmosphere = new Atmosphere();


    // CAMERA
    this.camera = new THREE.PerspectiveCamera(30, data.w / data.h, 1, 10000);
    this.camera.position.z = data.distance

    // SCENE
    this.Decor = new Decor(data);

    // ADD ON THE SCENE
    this.Decor.scene.add(this.GlobeAtmosphere.mesh)
    this.Decor.scene.add(this.Globe.mesh)

    // LIGHT
    this.light = new THREE.DirectionalLight(0xcccccc, 0.5);

    this.Decor.scene.add(new THREE.AmbientLight(0x656565));
    this.Decor.scene.add(this.light);   

    // DAT.GUI : https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
    gui.add(VARS, 'message');
    gui.add(VARS, 'speed', -.2, .2);
    gui.add(VARS, 'percent', 0, 1);

    this.container = document.getElementById("container")

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(data.w, data.h);

    this.renderer.domElement.style.position = 'absolute';
    this.container.appendChild(this.renderer.domElement);

    // DOM event handlers
    this.container.addEventListener('mousedown', this.start, false);
    window.addEventListener('resize', this.onWindowResize, false);
    // window.addEventListener('resize', this.resize, false);

    // Scroll for Chrome
    window.addEventListener('mousewheel', this.scroll, false);
    // Scroll for Firefox
    window.addEventListener('DOMMouseScroll', this.scroll, false);
    document.addEventListener( 'mousedown', this.onDocumentMouseDown, false );
    document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    this.add();

  }

  add() {

   this.addLevitatingBlock(data.cityPosition[0][0])

   for (var i = 0; i < data.cityPosition.length ; i++) {
    var city = data.cityPosition[i]
    this.addLevitatingBlock(city[0])
  }

}

createBlock(properties) {
    // create mesh
    var block = new THREE.Mesh(
      new THREE.BoxGeometry(.5,.5,.5),
        // new THREE.MeshLambertMaterial({color: '#'+Math.floor(Math.random()*16777215).toString(16)})
        new THREE.MeshLambertMaterial({color: '#fff'})
        );

    // calculate 2d position
    var pos2d = this.calculate2dPosition(properties);

    // add altitute
    pos2d.altitude = 200 + 10 / 2;

    // calculate 3d position
    this.set3dPosition(block, pos2d);

    // rotate towards earth
    block.lookAt(this.Globe.mesh.position);

    block.scale.z = 10;
    block.scale.x = 10;
    block.scale.y = 10;

    block.updateMatrix();
    
    return block;
  }

  addLevitatingBlock(data) {
    var block = this.createBlock(data);
    block.name = data.city 
    block.lat = data.lat
    block.lon = data.lon
    this.Decor.scene.add(block);
    objects.push(block)
    // data.levitatingBlocks.push(block);
    // data.blocks.push(block);
  }

  onDocumentMouseDown( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / this.renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY /this.renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, this.camera );

    var intersects = raycaster.intersectObjects( objects );
    var that = this
    if ( intersects.length > 0 ) {
      intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
      var el = intersects[ 0 ].object
      this.center(el)
      setTimeout(function(){
        that.zoomTo(el.position.z)
      },1000).bin

      console.log(el)
    }

  }

  onDocumentTouchStart( event ) {

    event.preventDefault();

    event.clientX = event.touches[0].clientX;
    event.clientY = event.touches[0].clientY;
    this.onDocumentMouseDown( event );

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

  zoomRelative(delta) {
    data.distanceTarget -= delta;
    this.checkAltituteBoundries();
  }

  zoomTo(altitute) {
    data.distanceTarget = (data.distanceTarget - altitute ) * .001;
    this.checkAltituteBoundries();
  }


  checkAltituteBoundries() {
    // max zoom
    if(data.distanceTarget < 220)
     data.distanceTarget = 220;

    // min zoom
    else if(data.distanceTarget > 900)
     data.distanceTarget = 900;
 }

  // DOM event handlers
  scroll(e) {
    e.preventDefault();

      // See
      // @link http://www.h3xed.com/programming/javascript-mouse-scroll-wheel-events-in-firefox-and-chrome
      if(e.wheelDelta) {
        // chrome
        var delta = e.wheelDelta * 0.5;
      } else {
        // firefox
        var delta = -e.detail * 15;
      }

      this.zoomRelative(delta);

      return false;
    }

    // DRAG event
    // @link https://github.com/dataarts/webgl-globe/blob/master/globe/globe.js#L273-L334
    start(e) {
      e.preventDefault();
      this.container.addEventListener('mousemove', this.move, false);
      this.container.addEventListener('mouseup', this.end, false);
      this.container.addEventListener('mouseout', this.end, false);

      data.mouseOnDown.x = -e.clientX;
      data.mouseOnDown.y = e.clientY;

      data.targetOnDown.x = data.target.x;
      data.targetOnDown.y = data.target.y;

      this.container.style.cursor = 'move';
    }

    move(e) {
      data.mouse.x = -e.clientX;
      data.mouse.y = e.clientY;

      var zoomDamp = data.distance / 1000;

      data.target.x = data.targetOnDown.x + (data.mouse.x - data.mouseOnDown.x) * 0.005 * zoomDamp;
      data.target.y = data.targetOnDown.y + (data.mouse.y - data.mouseOnDown.y) * 0.005 * zoomDamp;

      data.target.y = data.target.y > data.PI_HALF ? data.PI_HALF : data.target.y;
      data.target.y = data.target.y < - data.PI_HALF ? - data.PI_HALF : data.target.y;
    }

    end(e) {
      this.container.removeEventListener('mousemove', this.move, false);
      this.container.removeEventListener('mouseup', this.end, false);
      this.container.removeEventListener('mouseout', this.end, false);
      this.container.style.cursor = 'auto';
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
    
    this.set3dPosition(this.light, {
      x: data.rotation.x - 150,
      y: data.rotation.y - 150,
      altitude: data.distance
    });

    // this.Globe.mesh.rotation.y += VARS.speed
    // this.Globe.mesh.material.uniforms.percent.value = VARS.percent;
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
