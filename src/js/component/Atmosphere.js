import * as THREE from 'three'
import atmosphereVert from 'shaders/atmosphere.vert'
import atmosphereFrag from 'shaders/atmosphere.frag'

export default class Atmosphere {
  constructor(){
    var geometry = new THREE.SphereGeometry(200, 40, 30);
    var material = new THREE.ShaderMaterial({

      uniforms: {},
      vertexShader: atmosphereVert,
      fragmentShader: atmosphereFrag,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true

    });

    this.mesh = new THREE.Mesh(geometry,material)
    this.mesh.scale.set(1.12,1.12,1.12);
  }
}