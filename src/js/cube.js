import vsBasicH from "shaders/horizontal.vs"
import fsBasicH from "shaders/horizontal.fs"

import vsBasicV from "shaders/vertical.vs"
import fsBasicV from "shaders/vertical.fs"

const TEXTURE = new THREE.TextureLoader().load("./texture/letter-g.jpg")
const TEXTURE2 = new THREE.TextureLoader().load("./texture/letter-j.jpg")

export default class Cube {
  constructor(w = 1, h = 1, z = 1) {

    this.geometry = new THREE.BoxBufferGeometry(w, h, z);

    this.percentTarget = 1
    this.targetRotationX = 0 
    this.targetRotationY = 0 

    this.customHorizontalMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        // color: { type: "c", value: new THREE.Color( 0x000000 ) },
        color: { type: "c", value: new THREE.Color(0xffffff) },
        tex: { type: "t", value: TEXTURE },
        tex2: { type: "t", value: TEXTURE2 },
        percent: { type: "t", value: 0. },
      },
      name: 'cH',
      vertexShader: vsBasicH,
      fragmentShader: fsBasicH
    })

    this.customVerticalMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        // color: { type: "c", value: new THREE.Color( 0x000000 ) },
        color: { type: "c", value: new THREE.Color(0xffffff) },
        tex: { type: "t", value: TEXTURE },
        tex2: { type: "t", value: TEXTURE2 },
        percent: { type: "t", value: 0. },
      },
        name: 'cV',
        vertexShader: vsBasicV,
        fragmentShader: fsBasicV
    })
      // this.cube = new THREE.Mesh( geometry, material );
    this.mesh = new THREE.Mesh(this.geometry, this.customHorizontalMaterial);
    this.materialPercent = 0.
    this.rotationSpeed = {
      x: Math.random() + 4,
      y: Math.random() + 4
    }
  }
 // -------------------------------------------------------------------------------------------------- SWICHMATERIAL 
//  triggerTransition = () => {
//     this.materialPercent += (1 - this.materialPercent ) * .1;
//     this.mesh.material.uniforms.percent.value = this.materialPercent
//     if(this.materialPercent >= 0.9 ) this.materialPercent = 1
//  }

  switchMaterial = () => {
    this.mesh.material = this.mesh.material == this.customHorizontalMaterial ? this.customVerticalMaterial : this.customHorizontalMaterial;
    // console.log(this.cube.material)
    this.mesh.material.uniforms.percent.value = this.materialPercent
  }
  // -------------------------------------------------------------------------------------------------- ON BEAT
  get material() {
    return this.mesh.material
  }

  set material(value) {
    this.mesh.material = value
  }

  get position() {
    return this.mesh.position
  }

  set position(value) {
    // this.mesh.position.x = value.x || this.position.x
    // this.mesh.position.y = value.y || this.position.y
    // this.mesh.position.z = value.x || this.position.z
    this.mesh.position.x = value.x
    this.mesh.position.y = value.y
    this.mesh.position.z = value.z
  }

  onBeat = () => {
    if(Math.random() < 0.4) {
      this.targetRotationX += Math.PI 
      this.targetRotationY += Math.PI
 
    }  
    if(Math.random() < 0.5) { 
      if(this.percentTarget == 1) {
        this.percentTarget = 0
      } else {
        this.percentTarget = 1
      }
    }
  }

  onBeatRange = () => {
    this.switchMaterial()
      // this.meshSmall.material.uniforms.color.value.r = Math.random()
  }
  
  update = () => {
    this.materialPercent += (this.percentTarget - this.materialPercent ) * .1;
    this.mesh.rotation.x += (this.targetRotationX - this.mesh.rotation.x ) * .1;
    this.mesh.rotation.y += (this.targetRotationY - this.mesh.rotation.y ) * .1;
    this.mesh.material.uniforms.percent.value = this.materialPercent
    if(this.materialPercent == 1) {
      if(this.materialPercent >= 0.9 ) this.materialPercent = 1;
    }
  }
}