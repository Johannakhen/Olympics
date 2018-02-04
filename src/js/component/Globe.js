import * as THREE from 'three'
import earthVert from 'shaders/earth.vert'
import earthFrag from 'shaders/earth.frag'

const texture = new THREE.TextureLoader().load('./texture/world.jpg')

export default class Globe {
  constructor(){
    var geometry = new THREE.SphereGeometry(200, 40, 30);
    var material = new THREE.ShaderMaterial({

      uniforms: {
        texture: { type: "t", value: texture },
      },
      vertexShader: earthVert,
      fragmentShader: earthFrag

    });
    
    this.mesh = new THREE.Mesh(geometry,material)
    this.mesh.rotation.y = Math.PI
  }
}