import * as THREE from 'three'

export default class Scene {
  constructor(opt){
    console.log(opt);

    this.camera = new THREE.PerspectiveCamera(30, opt.w / opt.h, 1, 10000);
    this.camera.position.z = opt.distance || 1000000;
    this.scene = new THREE.Scene();
  }
}