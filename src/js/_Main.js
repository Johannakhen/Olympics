const OrbitControls = require('three-orbit-controls')(THREE)

import vsGlobe from "shaders/globe.vs"
import fsGlobe from "shaders/globe.fs"

import vsAtmo from "shaders/atmospher.vs"
import fsAtmo from "shaders/atmospher.fs"

import audio from "mnf/audio/audio"
import AudioAnalyser from 'mnf/audio/AudioAnalyser'
import AudioDebugger from 'mnf/audio/AudioDebugger'

import ColorPass from "postprocess/ColorPass"
import gui from 'mnf/gui'

const TEXTURE = new THREE.TextureLoader().load("./texture/world.jpg")
console.log(TEXTURE)

class Main {

  constructor() {

    // -------------------------------------------------------------------------------------------------- SCENE

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0x111111, 1);
    document.body.appendChild(this.renderer.domElement)

    // -------------------------------------------------------------------------------------------------- CAMERA

    this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000)
    this.camera.position.z = 500
    this.controls = new OrbitControls(this.camera)

    // -------------------------------------------------------------------------------------------------- POSTPROCESS

    this.composer = new WAGNER.Composer(this.renderer, { useRGBA: false })
    this.composer.setSize(window.innerWidth, window.innerHeight)
    this.passes = []

    // DAT.GUI : https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
    const f = gui.addFolder('postprocess')
    f.open()

    // WAGNER : https://github.com/spite/Wagner
    // Create a Bloom Pass
    this.bloomPass = new WAGNER.MultiPassBloomPass(128, 128)
    this.bloomPass.activate = true
      // this.bloomPass.params.applyZoomBlur = true
    this.bloomPass.params.blurAmount = 0.4
    let g = f.addFolder('bloom1')
    g.add(this.bloomPass, 'activate')
    g.add(this.bloomPass.params, 'zoomBlurStrength', 0, 1)
    g.add(this.bloomPass.params, 'blurAmount', 0, 1)
    g.add(this.bloomPass.params, 'applyZoomBlur')

    // CUSTOM PASS! ColorPass
    // this.colorPass = new ColorPass()
    // this.colorPass.createGui(f)

    // To remove the postprocessing, remove the passes
    // No passes = no postprocessing activated
    // this.passes.push( this.bloomPass )
    // this.passes.push( this.colorPass )

    // -------------------------------------------------------------------------------------------------- YOUR SCENE
    var globeGeometry = new THREE.SphereGeometry(200, 40, 30);
    var globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { type: "c", value: new THREE.Color(0xffeb3b) },
        texture: { type: "t", value: TEXTURE },
      },
      vertexShader: vsGlobe,
      fragmentShader: fsGlobe
    })

    this.globe = new THREE.Mesh(globeGeometry, globeMaterial);
    console.log(this.globe )
    this.globe.rotation.y = Math.PI;
    this.scene.add(this.globe);

    //--------------------------------------------------ATNOSPHERE 
    var material = new THREE.ShaderMaterial({
      vertexShader: vsAtmo,
      fragmentShader: fsAtmo,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    console.log( material )


    var mesh = new THREE.Mesh(globeGeometry, material);
    mesh.scale.set(1.2, 1.2, 1.2);
    this.scene.add(mesh);


    this.theta = 0
    this.phi = 0
    this.radius = 150


    window.addEventListener('resize', this.onResize, false)
    this.animate()
  }



  // -------------------------------------------------------------------------------------------------- EACH FRAME

  animate = () => {
    requestAnimationFrame(this.animate)
    this.render()
  }


  // -------------------------------------------------------------------------------------------------- RENDER

  render = () => {
    const passes = []
    for (let i = 0, n = this.passes.length; i < n; i++) {
      let pass = this.passes[i]
      if (pass.activate && (pass.shader || pass.isLoaded())) {
        passes.push(pass)
      }
    }
    if (passes.length > 0) {
      this.composer.reset()
      this.composer.render(this.scene, this.camera)
      for (let i = 0, n = passes.length - 1; i < n; i++) {
        let pass = passes[i]
        this.composer.pass(pass)
      }
      this.composer.toScreen(passes[passes.length - 1])
    } else {
      this.renderer.render(this.scene, this.camera)
    }
  }


  // -------------------------------------------------------------------------------------------------- RESIZE
  onResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.composer.setSize(this.renderer.domElement.width, this.renderer.domElement.height)
  }

}

export default new Main()