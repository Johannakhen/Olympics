import * as THREE from 'three'

const bg = new THREE.Color( 0x000 );
export default class Decor {
  constructor(opt){
    this.camera = new THREE.PerspectiveCamera(30, opt.w / opt.h, 1, 10000);
    this.camera.position.z = opt.distance || 1000000;
    this.scene = new THREE.Scene();
    this.scene.background = bg
  }
}