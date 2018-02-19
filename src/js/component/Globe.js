import * as THREE from 'three'
import earthVert from 'shaders/earth.vert'
import earthFrag from 'shaders/earth.frag'

// const texture = new THREE.TextureLoader().load('./texture/uvgrid.jpg')
const texture = new THREE.TextureLoader().load('./texture/world.jpg')

export default class Globe {
  constructor() {
    var geometry = new THREE.SphereGeometry(200, 64, 64);
    // var geometry = new THREE.IcosahedronGeometry( 100, 4 )
    var material = new THREE.ShaderMaterial({

      uniforms: {
        texture: { type: "t", value: texture },
        percent: { type: "t", value: 1. },
      },
      vertexShader: earthVert,
      fragmentShader: earthFrag

    });

    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.rotation.y = Math.PI
  }
}