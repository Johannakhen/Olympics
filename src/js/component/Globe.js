import * as THREE from 'three'
import earthVert from 'shaders/earth.vert'
import earthFrag from 'shaders/earth.frag'

const texture = new THREE.TextureLoader().load('./texture/uvgrid.jpg')
const map = new THREE.TextureLoader().load('./texture/_world.jpg')
const bump = new THREE.TextureLoader().load('./texture/bump.jpg')
const specular = new THREE.TextureLoader().load('./texture/specular.jpg')

export default class Globe {
  constructor() {
    var geometry = new THREE.SphereGeometry(200, 64, 64);
    // var geometry = new THREE.IcosahedronGeometry( 100, 4 )
    var material = new THREE.ShaderMaterial({

      uniforms: {
        texture: { type: "t", value: map },
      },
      vertexShader: earthVert,
      fragmentShader: earthFrag

    });

    // var material  = new THREE.MeshPhongMaterial();
    // material.map = map;

    // material.bump = bump; 
    // material.bumpScale = 0.02;

    // material.specularMap = specular;
    // material.specular = new THREE.Color('grey');
    

    this.mesh = new THREE.Mesh(geometry, material)
  }
}